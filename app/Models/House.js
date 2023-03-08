import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get HouseCard() {
    return ` <div class="col-8 col-md-4 p-4">
    <div class="card elevation-2">
      <img
        src="${this.imgUrl}"
        alt="House">
      <div class="p-2">
        <h4 class="text-center border-bottom border-dark">${this.name}</h4>
        <h5 class="text-center border-bottom border-dark">${this.year} | ${this.bedrooms} brs, ${this.bathrooms} ba | ${this.sqft} sqft</h5>
        <p class>${this.description}</p>
        <p class="text-end"> <span class="text-center border rounded border-dark p-2">$${this.price}</span> </p>
        <button class="btn btn-outline-danger" title="delete car" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
      </div>
    </div>
  </div>`
  }

  static HouseForm(){
    return `<form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
    <h3>List your House!</h3>
    <div class="mb-2 col-12">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" class="form-control">
    </div>
    <div class="mb-2 col-3">
      <label for="year">Year</label>
      <input type="number" name="year" id="year" class="form-control" >
    </div>
    <div class="mb-2 col-3">
      <label for="bedrooms">Bedrooms</label>
      <input type="number" name="bedrooms" id="bedrooms" class="form-control">
    </div>
    <div class="mb-2 col-3">
      <label for="bathrooms">Bathrooms</label>
      <input type="number" name="bathrooms" id="bathrooms" class="form-control">
    </div>
    <div class="mb-2 col-3">
      <label for="sqft">Sqft</label>
      <input type="number" name="sqft" id="sqft" class="form-control">
    </div>
    <div class="mb-2 col-12">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control">
    </div>
    <div class="mb-2 col-6">
      <label for="imgUrl">Image URL</label>
      <input type="url" name="imgUrl" id="imgUrl" class="form-control" >
    </div>
    <div class="mb-2 col-6">
      <label for="price">Price</label>
      <input type="number" name="price" id="price" class="form-control"  min="1">
    </div>
    <div class="text-end mt-2">
      <button class="btn" type="reset">cancel</button>
      <button class="btn btn-primary" type="submit">submit</button>
    </div>
  </form>`
  }
}
