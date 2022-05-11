import * as fs from 'fs'
import { Injectable, Logger } from "@nestjs/common";
import { OAuth2Client } from 'google-auth-library'

import { GG_OAUTH2_CREDENTIAL_PATH } from '../../../configs'

@Injectable()
export class GoogleOauth2Provider {
    private oauth2Client: OAuth2Client
    private clientId: string
    private redirectUri: string

    private hasInitialized: boolean = false
    private readonly logger = new Logger(this.constructor.name)

    constructor() {
        this.initialize()
    }

    private initialize() {
        if (this.hasInitialized) {
            this.logger.warn(`GG oAuth2 Client has been initialized!`)
        }

        try {
            const credentialBuffer = fs.readFileSync(GG_OAUTH2_CREDENTIAL_PATH)
            const credential = JSON.parse(credentialBuffer.toString())
            const { clientId, clientSecret, redirectUris } = credential
            this.oauth2Client = new OAuth2Client({ clientId, clientSecret, redirectUri: redirectUris[0] })
        } catch (error) {
            this.logger.error(`Could not init Google oAuth2 Client cause: "${error.message}"`)
            process.exit()
        }
    }

    async verify(clientId: string, idToken: string) {
        const ticket = await this.oauth2Client.verifyIdToken({
            idToken,
            audience: clientId,
        })

        const payload = ticket.getPayload()
        return payload

    }
}