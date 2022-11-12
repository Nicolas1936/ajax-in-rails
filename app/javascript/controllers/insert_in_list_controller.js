import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items", "form"]
  static values = {position: String}

  connect() {
    // console.log("Hello from insert_in_list_controller")
    // console.log(this.element)
    // console.log("my form : ", this.formTarget)
    // console.log("list of reviews :", this.itemsTarget)
  }

  send(event) {
    event.preventDefault()
    const url = this.formTarget.action
    const options = {
      method: "POST",
      headers: {"Accept" : "application/json"},
      body: new FormData(this.formTarget)
    }
    fetch(url, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        console.log(this.itemsTarget)
        if (data.my_inserted_item) {
          this.itemsTarget.insertAdjacentHTML(this.positionValue, data.my_inserted_item)
        }
        this.formTarget.outerHTML = data.my_form
      })
  }
}
