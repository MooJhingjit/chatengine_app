export default function TheirMessage({ lastMessage, message }) {
  const isFirstMessageGroup = !lastMessage || lastMessage.sender.username !== message.sender.username
  // console.log('lastMessage', lastMessage?.text);
  // console.log('message', message.text);
  return (
    <div className="message-row">
      {isFirstMessageGroup && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}

      {message?.attachments?.length > 0 ? (
        <img src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageGroup ? '4px' : '48px' }}
        />)
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageGroup ? '4px' : '48px' }}>
            {message.text}
          </div>
        )
      }
    </div>
  )
}
