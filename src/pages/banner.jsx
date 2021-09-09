

const Banner = () => {

    return (
      <div>

        <div className="header">
          <h1> Banner Image </h1>
        </div>

        <div className="form-container">
          
          <form>
            <div className= "fieldrow">
            <label>
              Title:
              <input type="text" name="title" id="title" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Description:
              <input type="text" name="Description" id="description" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Text Colour:
              <input type="text" name="Text Colour" id="TextColour" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Banner Image Name :
              <input type="text" name="Banner Image Name" id="ImageName" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Remarks:
              <input type="text" name="Remarks" id="Remarks" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Schedule Start:
              <input type="text" name="Schedule Start" id="startDate" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Type of Banner:
              <input type="text" name="BannerType" id="bannerType" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Display Sequence:
              <input type="text" name="Display Sequence" id="displaySequence" />
            </label>
            </div>
            
            <div className= "fieldrow">
            <label>
              Button Text:
              <input type="text" name="Button Text" id="buttonText" />
            </label>
            </div>            
            
            <div className= "fieldrow">
            <label>
              Button Colour:
              <input type="text" name="Button Colour" id="buttonColour" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Button Target:
              <input type="text" name="Button Target" id="buttonTarget" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Button Link:
              <input type="text" name="Button Link" id="buttonLink" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Product Code:
              <input type="text" name="Product Code" id="productCode" />
            </label>
            </div>

            <div className= "fieldrow">
            <label>
              Promo Code:
              <input type="text" name="Promo Code" id="promoCode" />
            </label>
            </div>

            
          </form>
          <input type="submit" value="Submit" />
        </div>


      </div>
    );


}


export default Banner;