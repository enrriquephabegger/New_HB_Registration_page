/* script.js */

/**
 * Map of Region + Account Type to Adobe Sign application URLs.
 * Replace the placeholder URLs with the real Adobe Sign links.
 */
const adobeSignLinks = {
  "Region1_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region1_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region2_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region2_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region3_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region3_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region4_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region4_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region5_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region5_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region6_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region6_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region7_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region7_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region8_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region8_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*",
  "Region9_Credit":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhCNMeY0K3y2zsRd0oLSxiyBAb1eNnmkk_PJt52arFeGrXz_GDtknc3k-wvBMsCtClY*",
  "Region9_Cash":"https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhC5xESsMPgT6Aj06r5-_95_uP4Gll3a2rM41rwrudsGMAzOi1N6BSnMqJRwONtATfM*"
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
