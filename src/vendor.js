/* This file contains references to the vendor libraries
  we're using in this project. This is used by webpack
  in production build only. A separate bundle for vendor
  code is useful since it's unlikely to change as often
  as the applications code. So all the libraries we reference
  here will be written to vendor.js so they can be
  cached until one of them change. So basically, this avoids
  of code changes. They only have to download vendor.js when
  a vendor library changes which should be less frequent.
  Any files that aren't referenced here will be bundled into
  main.js for the production build.

*/

import fetch from "whatwg-fetch";
