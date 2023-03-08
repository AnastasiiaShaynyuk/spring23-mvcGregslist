import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
      this.year = data.year
      this.name = data.name
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.sqft = data.sqft
      this.price = data.price
      this.description = data.description
      this.imgUrl = data.imgUrl
  }


  get HouseCard() {
    return `[${this.id} - ${this.color}]`
  }
}
