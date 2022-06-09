import { useModelProvider } from "@models/model.provider"
import { observer } from "mobx-react-lite"
import styled from 'styled-components'

const NotificationContainer = styled.div`
  border: 1px #d5d5d5 solid;
  border-radius: 3px;
  position: fixed;
  right: 50%;
  transform: translateX(50%) translateY(50%);
  top: 20%;
  background-color: white;
  z-index: 1000;
  padding: 24px;
`

const NotiTitle = styled.h4`
  margin-bottom: 25px;
`

const CloseButton = styled.button`
  color: white;
  background-color: #f7941d;
  border-color: #f7941d;
`

const Container = styled.div`
  background-color: #00000026;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
`

export const Notification: React.FC = observer(() => {
  const { appModel: { notifyContent, showNotification, closeNotification } } = useModelProvider()
  return showNotification
    ? (
      <Container>
        < NotificationContainer >
          <NotiTitle>
            <h3>Notification</h3>
          </NotiTitle>
          <p>{notifyContent}</p>
          <br />
          <div>
            <CloseButton onClick={closeNotification} className="btn">Close</CloseButton>
          </div>
        </NotificationContainer >
      </Container>
    )
    : null
})