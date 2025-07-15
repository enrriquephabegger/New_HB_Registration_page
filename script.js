/* script.js */

/**
 * Map of Region + Account Type to Adobe Sign application URLs.
 * Replace the placeholder URLs with the real Adobe Sign links.
 */
const adobeSignLinks = {
  "Region1_Credit":"https://example.com/adobe/region1-credit",
  "Region1_Cash":"https://example.com/adobe/region1-cash",
  "Region2_Credit":"https://example.com/adobe/region2-credit",
  "Region2_Cash":"https://example.com/adobe/region2-cash",
  "Region3_Credit":"https://example.com/adobe/region3-credit",
  "Region3_Cash":"https://example.com/adobe/region3-cash",
  "Region4_Credit":"https://example.com/adobe/region4-credit",
  "Region4_Cash":"https://example.com/adobe/region4-cash",
  "Region5_Credit":"https://example.com/adobe/region5-credit",
  "Region5_Cash":"https://example.com/adobe/region5-cash",
  "Region6_Credit":"https://example.com/adobe/region6-credit",
  "Region6_Cash":"https://example.com/adobe/region6-cash",
  "Region7_Credit":"https://example.com/adobe/region7-credit",
  "Region7_Cash":"https://example.com/adobe/region7-cash",
  "Region8_Credit":"https://example.com/adobe/region8-credit",
  "Region8_Cash":"https://example.com/adobe/region8-cash",
  "Region9_Credit":"https://example.com/adobe/region9-credit",
  "Region9_Cash":"https://example.com/adobe/region9-cash"
};

document.getElementById('registrationForm').addEventListener('submit', function(e){
  e.preventDefault();
  const region = document.getElementById('region').value;
  const accountType = document.getElementById('accountType').value;
  if(!region || !accountType){
    alert('Please select both region and account type.');
    return;
  }
  const key = `${region}_${accountType}`;
  const link = adobeSignLinks[key];
  if(link){
    window.location.href = link;
  }else{
    alert('We could not find the correct application link for your selection. Please contact customer service.');
  }
});
