class Sources extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="webkit-shadow rounded-md bg-white p-4">
                  <div class="flex items-center justify-between pb-2">
                    <div class="text-lg font-bold">Sources</div>
                    <div class="flex gap-4">
                      <button class="btn-link-sm">Add</button>
                      <button class="btn-link-sm">Edit</button>
                    </div>
                  </div>
                  <div class="block">
                    <div class="flex flex-row gap-5">
                      <div class="flex-none">
                        <div class="form-check">
                          <input
                            class="form-check-input checked:bg-secondary checked:border-secondary float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-700 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexCheckDefault"
                          >
                            Facebook
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input checked:bg-secondary checked:border-secondary float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-700 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexCheckDefault"
                          >
                            Twitter
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input checked:bg-secondary checked:border-secondary float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-700 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexCheckDefault"
                          >
                            Twitter
                          </label>
                        </div>
                      </div>
                      <div class="flex-none">
                        <div class="form-check">
                          <input
                            class="form-check-input checked:bg-secondary checked:border-secondary float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-700 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexCheckDefault"
                          >
                            SEO marketers forum
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
  }
}

customElements.define("sources-component", Sources);
