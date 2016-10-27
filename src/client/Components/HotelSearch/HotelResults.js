import React, {Component} from 'react';
import Hotel from './Hotel';
import Tweet from '../Tweet';
import Article from '../Article.js';

import styled from 'styled-components';

// const Wrapper = styled.h1`
//   padding: 4em;
//   background: papayawhip;
//   text-align: center;
//   font-size 1.5em;
//    color: palevioletred;
// `;

// const Title = styled.h5`
//   font-size: 1.5em;
//   text-align: center;
//   color: tomato;
// `;

// const ul = styled.section`
//   background: #9783c8;
// `;


const Wrapper = styled.h1`
  padding: 4em;
  text-align: center;
  font-size 1.5em;
`;

const Title = styled.h5`
  font-size: 1.5em;
  text-align: center;
`;

export default class HotelResults extends Component {
  constructor(props, context) {

    super(props, context);

    // set initial state
    this.state = {
      hotels: [{"hotelBasicInfo":{"id":105034713,"name":"Radisson Blu Portman Hotel, London","address":", ","stars":4,"popularity":80,"amenities":["Express check-out","24-hour Front Desk Service","Laundry","WiFi","Fireplace","Luggage storage","Elevator","Telephone","Balcony","Gym"]},"details":[{"name":"Roomer Travel","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_ro.png","nightlyRate":209,"totalRate":1249,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_ro%2f105034713%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_22a6af392c7b9a1561a7fc3e323858f0%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d183%26ticket_price%3d1249%26rooms%3d1%26max_price%3d1632.0&serviceType=HotelsDeeplink"},{"name":"Hotels.com","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_hc.png","nightlyRate":209,"totalRate":1250,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_hc%2f105034713%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_84ad3f611f61a9d8f94bc4aa02820f99%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d17%26ticket_price%3d1250%26rooms%3d1%26max_price%3d1632.0&serviceType=HotelsDeeplink"},{"name":"Cheaptickets","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_cx.png","nightlyRate":209,"totalRate":1250,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_cx%2f105034713%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_f4cf6af11e340986fb9fa725a2a2e51c%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d144%26ticket_price%3d1250%26rooms%3d1%26max_price%3d1632.0&serviceType=HotelsDeeplink"},{"name":"Orbitz","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_oz.png","nightlyRate":209,"totalRate":1250,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_oz%2f105034713%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_54e54cb420ff6e1f5dc771d6a2028335%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d161%26ticket_price%3d1250%26rooms%3d1%26max_price%3d1632.0&serviceType=HotelsDeeplink"},{"name":"Expedia","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_xp.png","nightlyRate":209,"totalRate":1250,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_xp%2f105034713%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_152a96645e5cd948af3c89fcb4fb230f%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d1%26ticket_price%3d1250%26rooms%3d1%26max_price%3d1632.0&serviceType=HotelsDeeplink"}]},{"hotelBasicInfo":{"id":46949777,"name":"Danubius Hotel Regents Park","address":", ","stars":4,"popularity":82,"amenities":["24-hour Front Desk Service","Laundry","WiFi","Luggage storage","Garden","Elevator","Telephone","Balcony","Television","Meeting facilities"]},"details":[{"name":"Hotels.com","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_hc.png","nightlyRate":128,"totalRate":765,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_hc%2f46949777%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_88ef4b076d7f71ad108174dd3fd511b2%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d17%26ticket_price%3d765%26rooms%3d1%26max_price%3d961.0&serviceType=HotelsDeeplink"},{"name":"Cheaptickets","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_cx.png","nightlyRate":128,"totalRate":765,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_cx%2f46949777%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_4620f2c814276b45b15c404e6891cefe%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d144%26ticket_price%3d765%26rooms%3d1%26max_price%3d961.0&serviceType=HotelsDeeplink"},{"name":"Orbitz","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_oz.png","nightlyRate":128,"totalRate":765,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_oz%2f46949777%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_425edbdc9f1bd1f52a436df2f9d550e4%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d161%26ticket_price%3d765%26rooms%3d1%26max_price%3d961.0&serviceType=HotelsDeeplink"},{"name":"Expedia","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_xp.png","nightlyRate":128,"totalRate":765,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_xp%2f46949777%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_6c5f9a8c864e63152572f2fc9c033844%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d1%26ticket_price%3d765%26rooms%3d1%26max_price%3d961.0&serviceType=HotelsDeeplink"},{"name":"Getaroom","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_gt.png","nightlyRate":128,"totalRate":766,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_gt%2f46949777%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_f98071d8463925cbdb9774b83e225d31%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d47%26ticket_price%3d766%26rooms%3d1%26max_price%3d961.0&serviceType=HotelsDeeplink"}]},{"hotelBasicInfo":{"id":71820375,"name":"Club Quarters Hotel, Lincoln'S Inn Fields","address":", ","stars":4,"popularity":86,"amenities":["Fitness Center","Express check-out","Wedding facilities","Express check-in","Balcony","24-hour Front Desk Service","Non-smoking","Laundry","Meeting facilities","Restaurant"]},"details":[{"name":"Hotels.com","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_hc.png","nightlyRate":202,"totalRate":1207,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_hc%2f71820375%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_b6cb51c1baeb94ac1d9b95bbf90e79b7%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d17%26ticket_price%3d1207%26rooms%3d1%26max_price%3d1224.0&serviceType=HotelsDeeplink"},{"name":"Cheaptickets","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_cx.png","nightlyRate":202,"totalRate":1207,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_cx%2f71820375%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_0969f00a4f996a632766f65809e60275%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d144%26ticket_price%3d1207%26rooms%3d1%26max_price%3d1224.0&serviceType=HotelsDeeplink"},{"name":"Orbitz","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_oz.png","nightlyRate":202,"totalRate":1207,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_oz%2f71820375%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_c560bbed7c6379f3f2126d08f173672f%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d161%26ticket_price%3d1207%26rooms%3d1%26max_price%3d1224.0&serviceType=HotelsDeeplink"},{"name":"Expedia","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_xp.png","nightlyRate":202,"totalRate":1207,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_xp%2f71820375%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_c6d2cc7539d8c617e9e6f9bef28900e6%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d1%26ticket_price%3d1207%26rooms%3d1%26max_price%3d1224.0&serviceType=HotelsDeeplink"},{"name":"Wotif","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_wo.png","nightlyRate":202,"totalRate":1207,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_wo%2f71820375%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_a31286d79ad709446383ccbe4909cc4b%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d227%26ticket_price%3d1207%26rooms%3d1%26max_price%3d1224.0&serviceType=HotelsDeeplink"}]},{"hotelBasicInfo":{"id":47165049,"name":"Park Plaza Westminster Bridge London","address":", ","stars":4,"popularity":90,"amenities":["Express check-out","24-hour Front Desk Service","Laundry","WiFi","Luggage storage","Elevator","Steam Room","Telephone","Television","Minibar"]},"details":[{"name":"Hotels.com","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_hc.png","nightlyRate":245,"totalRate":1470,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_hc%2f47165049%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_e6aa1d9ff93d7cef38d4bb0f0323d493%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d17%26ticket_price%3d1470%26rooms%3d1%26max_price%3d1550.0&serviceType=HotelsDeeplink"},{"name":"Amoma","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_am.png","nightlyRate":245,"totalRate":1470,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_am%2f47165049%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_801f89240619e977fb53038d36486d9a%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d29%26ticket_price%3d1470%26rooms%3d1%26max_price%3d1550.0&serviceType=HotelsDeeplink"},{"name":"Roomer Travel","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_ro.png","nightlyRate":245,"totalRate":1470,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_ro%2f47165049%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_b146a5b15aec66a2e5c4a214430c8671%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d183%26ticket_price%3d1470%26rooms%3d1%26max_price%3d1550.0&serviceType=HotelsDeeplink"},{"name":"Cheaptickets","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_cx.png","nightlyRate":245,"totalRate":1470,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_cx%2f47165049%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_76d882cbe0824f80bd0f9f4a8ca87059%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d144%26ticket_price%3d1470%26rooms%3d1%26max_price%3d1550.0&serviceType=HotelsDeeplink"},{"name":"Orbitz","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_oz.png","nightlyRate":245,"totalRate":1470,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_oz%2f47165049%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_e4e6cce59d4b8226c1787ebdbfa1908a%26q_datetime_utc%3d2016-10-24T01%253A05%253A57%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d161%26ticket_price%3d1470%26rooms%3d1%26max_price%3d1550.0&serviceType=HotelsDeeplink"}]},{"hotelBasicInfo":{"id":117344906,"name":"Millennium Gloucester Hotel London","address":", ","stars":4,"popularity":78,"amenities":["Fitness Center","Express check-out","Wedding facilities","Parking","24-hour Front Desk Service","Non-smoking","Bar","Meeting facilities","Business center","Express check-in"]},"details":[{"name":"Amoma","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_am.png","nightlyRate":140,"totalRate":840,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_am%2f117344906%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_9a8ca302c65468d466a9d924b78a4d07%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d29%26ticket_price%3d840%26rooms%3d1%26max_price%3d1493.0&serviceType=HotelsDeeplink"},{"name":"Hotel Power","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_ho.png","nightlyRate":152,"totalRate":908,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_ho%2f117344906%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26q_datetime_utc%3d2016-10-24T01%253A05%253A59%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d224%26ticket_price%3d908%26rooms%3d1%26max_price%3d1493.0&serviceType=HotelsDeeplink"},{"name":"Ctrip","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_ct.png","nightlyRate":164,"totalRate":979,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_ct%2f117344906%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_30e05398effc7c3e646da3b3d32e2b92%26q_datetime_utc%3d2016-10-24T01%253A05%253A58%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d31%26ticket_price%3d979%26rooms%3d1%26max_price%3d1493.0&serviceType=HotelsDeeplink"},{"name":"Hotels.com","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_hc.png","nightlyRate":164,"totalRate":980,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_hc%2f117344906%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-west-1.prod_8cbf55aa2dcbd27476b0189de706f21d%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d17%26ticket_price%3d980%26rooms%3d1%26max_price%3d1493.0&serviceType=HotelsDeeplink"},{"name":"Cheaptickets","image_url":"http://s1.apideeplink.com/images/websites/220x80/h_cx.png","nightlyRate":164,"totalRate":980,"bookingUrl":"http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=www.skyscanner.com%2fhotel_deeplink%2f4.0%2fUS%2fen-US%2fUSD%2fh_cx%2f117344906%2f2016-12-25%2f2016-12-31%2fhotel%2fhotel%2fhotels%3frooms_left%3d0%26deeplink_ids%3deu-central-1.prod_4bb3b21f66d9256a8509238c8bc82838%26q_datetime_utc%3d2016-10-24T01%253A05%253A56%26guests%3d1%26request_id%3d36c0f8ae-b1f7-43f6-ba3c-ba4773f5b140%26legacy_provider_id%3d144%26ticket_price%3d980%26rooms%3d1%26max_price%3d1493.0&serviceType=HotelsDeeplink"}]}]
    };
  }

  render() {
    const hotelsOld = this.state.hotels;
    const { hotels } = this.props;
    const tweets = this.props.twitter;
    const { news } = this.props;
    return (
<div className= "HotelResultsPage">

  <div className="container" className="hotelResultsContainer" id="main">
    <div className="row">
        <div className="col-md-3 col-sm-6">
         <div className="panel panel-default">
           <div className="panel-heading"><a href="#" className="pull-right">View all</a> <h4>News</h4></div>
        <div className="panel-body">
              <div className="clearfix"></div>
          <hr/>
          {
            news.map((article) => 
             <div>
                <Article
                  title={article.title}
                  url={article.url}
                  publishedDate={article.publishedDate}
                  text={article.text}
                />
                </div>
            )
          }
        </div>
    </div>

   </div>

       <div className="col-md-6 col-sm-6">
          <div className="panel panel-default">
          <div className="panel-heading"><a href="#" className="pull-right">View all</a> <h4>Search Results</h4></div>
          <div className="panel-body">
          <div className="clearfix"></div>
          <br/>
              {
            hotels.map((hotel) => 
                  <div>

                    <Hotel
                      basicInfo={hotel.hotelBasicInfo}
                      details={hotel.details}         
                    />
                  </div>
            )
          }
       </div>
      </div>
    </div>

         <div className="col-md-3 col-sm-6">
               <div className="panel panel-default">
                 <div className="panel-heading"><a href="#" className="pull-right">View all</a> <h4>Tweets</h4></div>
                   <div className="panel-body">
                   <div className="clearfix">
      {
           tweets.map((tweet) => 
              <div>
                <Tweet
                  name={tweet.name}
                  url={tweet.url}
                  query={tweet.query}
                  volume={tweet.tweet_volume}
                />
                </div>
                )
         }
                     <br/>
                 
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
</div>
    )
  }
}