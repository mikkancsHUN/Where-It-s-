import SendOrderListItem from "./SendOrderListItem"
import './send-order-list.css'

function SendOrderList() {
  return (
    <ul className="send-order__list">
      <SendOrderListItem />
      <SendOrderListItem />
      <SendOrderListItem />
    </ul>
  )
}

export default SendOrderList