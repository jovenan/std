// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import { DecoManifest } from "$live/types.ts";
import * as $0 from "./functions/vtexProductListingPage.ts";
import * as $1 from "./functions/butterCMSCategories.ts";
import * as $2 from "./functions/butterCMSPage.ts";
import * as $3 from "./functions/vtexProductList.ts";
import * as $4 from "./functions/vtexLegacyProductDetailsPage.ts";
import * as $5 from "./functions/vtexNavbar.ts";
import * as $6 from "./functions/shopifyProductDetailsPage.ts";
import * as $7 from "./functions/butterCMSPosts.ts";
import * as $8 from "./functions/butterCMSPlaces.ts";
import * as $9 from "./functions/vtexWishlist.ts";
import * as $10 from "./functions/butterCMSBrands.ts";
import * as $11 from "./functions/vtexLegacyProductList.ts";
import * as $12 from "./functions/occProductDetailsPage.ts";
import * as $13 from "./functions/butterCMSRelatedPosts.ts";
import * as $14 from "./functions/vtexLegacyRelatedProductsLoader.ts";
import * as $15 from "./functions/requestToParam.ts";
import * as $16 from "./functions/butterCMSPostDetail.ts";
import * as $17 from "./functions/vtexLegacyProductListingPage.ts";
import * as $18 from "./functions/butterCMSFeaturedPosts.ts";
import * as $19 from "./functions/vtexSuggestions.ts";
import * as $20 from "./functions/vndaProductList.ts";
import * as $21 from "./functions/shopifyProductListingPage.ts";
import * as $22 from "./functions/vndaProductListingPage.ts";
import * as $23 from "./functions/butterCMSAds.ts";
import * as $24 from "./functions/shopifyProductList.ts";
import * as $25 from "./functions/vtexProductDetailsPage.ts";
import * as $26 from "./functions/vndaProductDetailsPage.ts";
import * as $$0 from "./accounts/occ.ts";
import * as $$1 from "./accounts/vtex.ts";
import * as $$2 from "./accounts/shopify.ts";
import * as $$3 from "./accounts/butterCMS.ts";
import * as $$4 from "./accounts/linxImpulse.ts";
import * as $$5 from "./accounts/nuvemShop.ts";
import * as $$6 from "./accounts/yourViews.ts";
import * as $$7 from "./accounts/vnda.ts";
import * as $$$0 from "./loaders/shopify/cart.ts";
import * as $$$1 from "./loaders/nuvemShop/nuvemShopProductDetailsPage.ts";
import * as $$$2 from "./loaders/nuvemShop/nuvemShopProductListingPage.ts";
import * as $$$3 from "./loaders/nuvemShop/nuvemShopProductList.ts";
import * as $$$4 from "./loaders/vtex/proxy.ts";
import * as $$$5 from "./loaders/vtex/intelligentSearch/suggestions.ts";
import * as $$$6 from "./loaders/vtex/intelligentSearch/productDetailsPage.ts";
import * as $$$7 from "./loaders/vtex/intelligentSearch/productList.ts";
import * as $$$8 from "./loaders/vtex/intelligentSearch/productListingPage.ts";
import * as $$$9 from "./loaders/vtex/legacy/productDetailsPage.ts";
import * as $$$10 from "./loaders/vtex/legacy/relatedProductsLoader.ts";
import * as $$$11 from "./loaders/vtex/legacy/productList.ts";
import * as $$$12 from "./loaders/vtex/legacy/productListingPage.ts";
import * as $$$13 from "./loaders/vtex/cart.ts";
import * as $$$14 from "./loaders/vtex/navbar.ts";
import * as $$$15 from "./loaders/vtex/wishlist.ts";
import * as $$$16 from "./loaders/vtex/user.ts";
import * as $$$17 from "./loaders/x/redirectsFromCsv.ts";
import * as $$$18 from "./loaders/linxImpulse/products/similarItems.ts";
import * as $$$19 from "./loaders/linxImpulse/autocompletes/popular.ts";
import * as $$$20 from "./loaders/linxImpulse/autocompletes/suggestions.ts";
import * as $$$21 from "./loaders/linxImpulse/search.ts";
import * as $$$22 from "./loaders/linxImpulse/pages/recommendations.ts";
import * as $$$23 from "./loaders/vnda/proxy.ts";
import * as $$$24 from "./loaders/vnda/cart.ts";
import * as $$$$0 from "./routes/_app.tsx";
import * as $$$$1 from "./routes/styles.css.ts";
import * as $$$$2 from "./routes/404.tsx";
import * as $$$$$$0 from "./handlers/sitemap.ts";
import * as $$$$$$1 from "./handlers/vtex/sitemap.ts";
import * as $$$$$$$$0 from "./sections/configShopify.global.tsx";
import * as $$$$$$$$1 from "./sections/SEOPLP.tsx";
import * as $$$$$$$$2 from "./sections/configVTEX.global.tsx";
import * as $$$$$$$$3 from "./sections/Analytics.tsx";
import * as $$$$$$$$4 from "./sections/configButterCMS.global.tsx";
import * as $$$$$$$$5 from "./sections/configYourViews.global.tsx";
import * as $$$$$$$$6 from "./sections/VTEXPortalDataLayerCompatibility.tsx";
import * as $$$$$$$$7 from "./sections/SEOPDP.tsx";
import * as $$$$$$$$8 from "./sections/configLinxImpulse.global.tsx";
import * as $$$$$$$$9 from "./sections/configNuvemShop.tsx";
import * as $$$$$$$$10 from "./sections/SEO.tsx";
import * as $$$$$$$$11 from "./sections/configOCC.global.tsx";
import * as $$$$$$$$$$$0 from "./actions/shopify/cart/addItem.ts";
import * as $$$$$$$$$$$1 from "./actions/vtex/newsletter/subscribe.ts";
import * as $$$$$$$$$$$2 from "./actions/vtex/notifyme.ts";
import * as $$$$$$$$$$$3 from "./actions/vtex/analytics/sendEvent.ts";
import * as $$$$$$$$$$$4 from "./actions/vtex/cart/updateCoupons.ts";
import * as $$$$$$$$$$$5 from "./actions/vtex/cart/updateAttachment.ts";
import * as $$$$$$$$$$$6 from "./actions/vtex/cart/updateItemAttachment.ts";
import * as $$$$$$$$$$$7 from "./actions/vtex/cart/removeItems.ts";
import * as $$$$$$$$$$$8 from "./actions/vtex/cart/removeItemAttachment.ts";
import * as $$$$$$$$$$$9 from "./actions/vtex/cart/simulation.ts";
import * as $$$$$$$$$$$10 from "./actions/vtex/cart/updateItemPrice.ts";
import * as $$$$$$$$$$$11 from "./actions/vtex/cart/getInstallment.ts";
import * as $$$$$$$$$$$12 from "./actions/vtex/cart/updateProfile.ts";
import * as $$$$$$$$$$$13 from "./actions/vtex/cart/addItems.ts";
import * as $$$$$$$$$$$14 from "./actions/vtex/cart/updateItems.ts";
import * as $$$$$$$$$$$15 from "./actions/vtex/cart/updateUser.ts";
import * as $$$$$$$$$$$16 from "./actions/vtex/wishlist/addItem.ts";
import * as $$$$$$$$$$$17 from "./actions/vtex/wishlist/removeItem.ts";
import * as $$$$$$$$$$$18 from "./actions/vnda/cart/updateItem.ts";
import * as $$$$$$$$$$$19 from "./actions/vnda/cart/setShippingAddress.ts";
import * as $$$$$$$$$$$20 from "./actions/vnda/cart/addItem.ts";
import * as $$$$$$$$$$$21 from "./actions/vnda/cart/updateCoupon.ts";
import * as $live_workflows from "$live/routes/live/workflows/run.ts";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_invoke_key from "$live/routes/live/invoke/[...key].ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect/[...block].ts";
import * as $live_release from "$live/routes/live/release.ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews_block from "$live/routes/live/previews/[...block].tsx";
import * as $live_previews_index from "$live/routes/live/previews/index.tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i1$0 from "$live/loaders/state.ts";
import * as i1$1 from "$live/loaders/workflows/events.ts";
import * as i1$2 from "$live/loaders/workflows/get.ts";
import * as i1$$0 from "$live/handlers/devPage.ts";
import * as i1$$1 from "$live/handlers/fresh.ts";
import * as i1$$2 from "$live/handlers/proxy.ts";
import * as i1$$3 from "$live/handlers/redirect.ts";
import * as i1$$4 from "$live/handlers/router.ts";
import * as i1$$5 from "$live/handlers/routesSelection.ts";
import * as i1$$6 from "$live/handlers/workflowRunner.ts";
import * as i1$$$0 from "$live/pages/LivePage.tsx";
import * as i1$$$$0 from "$live/sections/Conditional_Beta.tsx";
import * as i1$$$$1 from "$live/sections/EmptySection.tsx";
import * as i1$$$$2 from "$live/sections/PageInclude.tsx";
import * as i1$$$$3 from "$live/sections/Slot.tsx";
import * as i1$$$$4 from "$live/sections/UseSlot.tsx";
import * as i1$$$$$0 from "$live/matchers/MatchAlways.ts";
import * as i1$$$$$1 from "$live/matchers/MatchCron.ts";
import * as i1$$$$$2 from "$live/matchers/MatchDate.ts";
import * as i1$$$$$3 from "$live/matchers/MatchDevice.ts";
import * as i1$$$$$4 from "$live/matchers/MatchEnvironment.ts";
import * as i1$$$$$5 from "$live/matchers/MatchHost.ts";
import * as i1$$$$$6 from "$live/matchers/MatchLocation.ts";
import * as i1$$$$$7 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$$8 from "$live/matchers/MatchRandom.ts";
import * as i1$$$$$9 from "$live/matchers/MatchSite.ts";
import * as i1$$$$$10 from "$live/matchers/MatchUserAgent.ts";
import * as i1$$$$$$0 from "$live/flags/audience.ts";
import * as i1$$$$$$1 from "$live/flags/everyone.ts";
import * as i1$$$$$$2 from "$live/flags/flag.ts";
import * as i1$$$$$$3 from "$live/flags/multivariate.ts";
import * as i1$$$$$$$0 from "$live/actions/workflows/cancel.ts";
import * as i1$$$$$$$1 from "$live/actions/workflows/signal.ts";
import * as i1$$$$$$$2 from "$live/actions/workflows/start.ts";

const manifest = {
  "functions": {
    "deco-sites/std/functions/butterCMSAds.ts": $23,
    "deco-sites/std/functions/butterCMSBrands.ts": $10,
    "deco-sites/std/functions/butterCMSCategories.ts": $1,
    "deco-sites/std/functions/butterCMSFeaturedPosts.ts": $18,
    "deco-sites/std/functions/butterCMSPage.ts": $2,
    "deco-sites/std/functions/butterCMSPlaces.ts": $8,
    "deco-sites/std/functions/butterCMSPostDetail.ts": $16,
    "deco-sites/std/functions/butterCMSPosts.ts": $7,
    "deco-sites/std/functions/butterCMSRelatedPosts.ts": $13,
    "deco-sites/std/functions/occProductDetailsPage.ts": $12,
    "deco-sites/std/functions/requestToParam.ts": $15,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": $6,
    "deco-sites/std/functions/shopifyProductList.ts": $24,
    "deco-sites/std/functions/shopifyProductListingPage.ts": $21,
    "deco-sites/std/functions/vndaProductDetailsPage.ts": $26,
    "deco-sites/std/functions/vndaProductList.ts": $20,
    "deco-sites/std/functions/vndaProductListingPage.ts": $22,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": $4,
    "deco-sites/std/functions/vtexLegacyProductList.ts": $11,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": $17,
    "deco-sites/std/functions/vtexLegacyRelatedProductsLoader.ts": $14,
    "deco-sites/std/functions/vtexNavbar.ts": $5,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": $25,
    "deco-sites/std/functions/vtexProductList.ts": $3,
    "deco-sites/std/functions/vtexProductListingPage.ts": $0,
    "deco-sites/std/functions/vtexSuggestions.ts": $19,
    "deco-sites/std/functions/vtexWishlist.ts": $9,
  },
  "accounts": {
    "deco-sites/std/accounts/butterCMS.ts": $$3,
    "deco-sites/std/accounts/linxImpulse.ts": $$4,
    "deco-sites/std/accounts/nuvemShop.ts": $$5,
    "deco-sites/std/accounts/occ.ts": $$0,
    "deco-sites/std/accounts/shopify.ts": $$2,
    "deco-sites/std/accounts/vnda.ts": $$7,
    "deco-sites/std/accounts/vtex.ts": $$1,
    "deco-sites/std/accounts/yourViews.ts": $$6,
  },
  "loaders": {
    "$live/loaders/state.ts": i1$0,
    "$live/loaders/workflows/events.ts": i1$1,
    "$live/loaders/workflows/get.ts": i1$2,
    "deco-sites/std/loaders/linxImpulse/autocompletes/popular.ts": $$$19,
    "deco-sites/std/loaders/linxImpulse/autocompletes/suggestions.ts": $$$20,
    "deco-sites/std/loaders/linxImpulse/pages/recommendations.ts": $$$22,
    "deco-sites/std/loaders/linxImpulse/products/similarItems.ts": $$$18,
    "deco-sites/std/loaders/linxImpulse/search.ts": $$$21,
    "deco-sites/std/loaders/nuvemShop/nuvemShopProductDetailsPage.ts": $$$1,
    "deco-sites/std/loaders/nuvemShop/nuvemShopProductList.ts": $$$3,
    "deco-sites/std/loaders/nuvemShop/nuvemShopProductListingPage.ts": $$$2,
    "deco-sites/std/loaders/shopify/cart.ts": $$$0,
    "deco-sites/std/loaders/vnda/cart.ts": $$$24,
    "deco-sites/std/loaders/vnda/proxy.ts": $$$23,
    "deco-sites/std/loaders/vtex/cart.ts": $$$13,
    "deco-sites/std/loaders/vtex/intelligentSearch/productDetailsPage.ts": $$$6,
    "deco-sites/std/loaders/vtex/intelligentSearch/productList.ts": $$$7,
    "deco-sites/std/loaders/vtex/intelligentSearch/productListingPage.ts": $$$8,
    "deco-sites/std/loaders/vtex/intelligentSearch/suggestions.ts": $$$5,
    "deco-sites/std/loaders/vtex/legacy/productDetailsPage.ts": $$$9,
    "deco-sites/std/loaders/vtex/legacy/productList.ts": $$$11,
    "deco-sites/std/loaders/vtex/legacy/productListingPage.ts": $$$12,
    "deco-sites/std/loaders/vtex/legacy/relatedProductsLoader.ts": $$$10,
    "deco-sites/std/loaders/vtex/navbar.ts": $$$14,
    "deco-sites/std/loaders/vtex/proxy.ts": $$$4,
    "deco-sites/std/loaders/vtex/user.ts": $$$16,
    "deco-sites/std/loaders/vtex/wishlist.ts": $$$15,
    "deco-sites/std/loaders/x/redirectsFromCsv.ts": $$$17,
  },
  "routes": {
    "./routes/_app.tsx": $$$$0,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/404.tsx": $$$$2,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect/[...block].ts": $live_inspect,
    "./routes/live/invoke/[...key].ts": $live_invoke_key,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews_block,
    "./routes/live/previews/index.tsx": $live_previews_index,
    "./routes/live/release.ts": $live_release,
    "./routes/live/workbench.ts": $live_workbench,
    "./routes/live/workflows/run.ts": $live_workflows,
    "./routes/styles.css.ts": $$$$1,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i1$$0,
    "$live/handlers/fresh.ts": i1$$1,
    "$live/handlers/proxy.ts": i1$$2,
    "$live/handlers/redirect.ts": i1$$3,
    "$live/handlers/router.ts": i1$$4,
    "$live/handlers/routesSelection.ts": i1$$5,
    "$live/handlers/workflowRunner.ts": i1$$6,
    "deco-sites/std/handlers/sitemap.ts": $$$$$$0,
    "deco-sites/std/handlers/vtex/sitemap.ts": $$$$$$1,
  },
  "sections": {
    "$live/sections/Conditional_Beta.tsx": i1$$$$0,
    "$live/sections/EmptySection.tsx": i1$$$$1,
    "$live/sections/PageInclude.tsx": i1$$$$2,
    "$live/sections/Slot.tsx": i1$$$$3,
    "$live/sections/UseSlot.tsx": i1$$$$4,
    "deco-sites/std/sections/Analytics.tsx": $$$$$$$$3,
    "deco-sites/std/sections/configButterCMS.global.tsx": $$$$$$$$4,
    "deco-sites/std/sections/configLinxImpulse.global.tsx": $$$$$$$$8,
    "deco-sites/std/sections/configNuvemShop.tsx": $$$$$$$$9,
    "deco-sites/std/sections/configOCC.global.tsx": $$$$$$$$11,
    "deco-sites/std/sections/configShopify.global.tsx": $$$$$$$$0,
    "deco-sites/std/sections/configVTEX.global.tsx": $$$$$$$$2,
    "deco-sites/std/sections/configYourViews.global.tsx": $$$$$$$$5,
    "deco-sites/std/sections/SEO.tsx": $$$$$$$$10,
    "deco-sites/std/sections/SEOPDP.tsx": $$$$$$$$7,
    "deco-sites/std/sections/SEOPLP.tsx": $$$$$$$$1,
    "deco-sites/std/sections/VTEXPortalDataLayerCompatibility.tsx": $$$$$$$$6,
  },
  "actions": {
    "$live/actions/workflows/cancel.ts": i1$$$$$$$0,
    "$live/actions/workflows/signal.ts": i1$$$$$$$1,
    "$live/actions/workflows/start.ts": i1$$$$$$$2,
    "deco-sites/std/actions/shopify/cart/addItem.ts": $$$$$$$$$$$0,
    "deco-sites/std/actions/vnda/cart/addItem.ts": $$$$$$$$$$$20,
    "deco-sites/std/actions/vnda/cart/setShippingAddress.ts": $$$$$$$$$$$19,
    "deco-sites/std/actions/vnda/cart/updateCoupon.ts": $$$$$$$$$$$21,
    "deco-sites/std/actions/vnda/cart/updateItem.ts": $$$$$$$$$$$18,
    "deco-sites/std/actions/vtex/analytics/sendEvent.ts": $$$$$$$$$$$3,
    "deco-sites/std/actions/vtex/cart/addItems.ts": $$$$$$$$$$$13,
    "deco-sites/std/actions/vtex/cart/getInstallment.ts": $$$$$$$$$$$11,
    "deco-sites/std/actions/vtex/cart/removeItemAttachment.ts": $$$$$$$$$$$8,
    "deco-sites/std/actions/vtex/cart/removeItems.ts": $$$$$$$$$$$7,
    "deco-sites/std/actions/vtex/cart/simulation.ts": $$$$$$$$$$$9,
    "deco-sites/std/actions/vtex/cart/updateAttachment.ts": $$$$$$$$$$$5,
    "deco-sites/std/actions/vtex/cart/updateCoupons.ts": $$$$$$$$$$$4,
    "deco-sites/std/actions/vtex/cart/updateItemAttachment.ts": $$$$$$$$$$$6,
    "deco-sites/std/actions/vtex/cart/updateItemPrice.ts": $$$$$$$$$$$10,
    "deco-sites/std/actions/vtex/cart/updateItems.ts": $$$$$$$$$$$14,
    "deco-sites/std/actions/vtex/cart/updateProfile.ts": $$$$$$$$$$$12,
    "deco-sites/std/actions/vtex/cart/updateUser.ts": $$$$$$$$$$$15,
    "deco-sites/std/actions/vtex/newsletter/subscribe.ts": $$$$$$$$$$$1,
    "deco-sites/std/actions/vtex/notifyme.ts": $$$$$$$$$$$2,
    "deco-sites/std/actions/vtex/wishlist/addItem.ts": $$$$$$$$$$$16,
    "deco-sites/std/actions/vtex/wishlist/removeItem.ts": $$$$$$$$$$$17,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i1$$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i1$$$$$0,
    "$live/matchers/MatchCron.ts": i1$$$$$1,
    "$live/matchers/MatchDate.ts": i1$$$$$2,
    "$live/matchers/MatchDevice.ts": i1$$$$$3,
    "$live/matchers/MatchEnvironment.ts": i1$$$$$4,
    "$live/matchers/MatchHost.ts": i1$$$$$5,
    "$live/matchers/MatchLocation.ts": i1$$$$$6,
    "$live/matchers/MatchMulti.ts": i1$$$$$7,
    "$live/matchers/MatchRandom.ts": i1$$$$$8,
    "$live/matchers/MatchSite.ts": i1$$$$$9,
    "$live/matchers/MatchUserAgent.ts": i1$$$$$10,
  },
  "flags": {
    "$live/flags/audience.ts": i1$$$$$$0,
    "$live/flags/everyone.ts": i1$$$$$$1,
    "$live/flags/flag.ts": i1$$$$$$2,
    "$live/flags/multivariate.ts": i1$$$$$$3,
  },
  "islands": {},
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
