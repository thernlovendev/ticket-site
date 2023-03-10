import { createHashRouter, Outlet } from "react-router-dom";
import { LogInView } from "../modules/authentication/LogInView";
import {
  PageLayoutView,
  CoverTypes,
} from "../modules/page_layout/PageLayoutView";
import { SignUpView } from "../modules/authentication/SignUpView";
import { LandingView } from "../modules/landing/LandingView";
import { MainView } from "../modules/main/MainView";
import { NotFound } from "./components/NotFound";
import { ForgotPasswordView } from "../modules/authentication/ForgotPasswordView";
import { CreatePasswordView } from "../modules/authentication/CreatePasswordView";
import { RegisterView } from "../modules/authentication/RegisterView";
import { MyAccountView } from "../modules/authentication/MyAccountView";
import { EditAccountView } from "../modules/authentication/EditAccountView";
import { SuccessActionView } from "../modules/authentication/SuccessActionView";
import { DeleteAccountView } from "../modules/authentication/DeleteAccountView";
import { ContactView } from "../modules/contact/ContactView";
import { AboutView } from "../modules/about/AboutView";
import { ProductsLayout } from "../modules/page_layout/ProductsLayout";
import { BigApplePassView } from "../modules/package_tour/BigApplePassView";
import { NYExploreView } from "../modules/package_tour/NYExploreView";
import { NYCityPassView } from "../modules/package_tour/NYCityPassView";
import { ObservationsView } from "../modules/city_attractions/ObservationsView";
import { RidesAndCruisesView } from "../modules/city_attractions/RidesAndCruisesView";
import { MusicalsAndShowsView } from "../modules/musicals_and_shows/MusicalsAndShowsView";
import { ProductDetailView } from "../modules/product_detail/ProductDetailView";
import { ShowDetailView } from "../modules/product_detail/ShowDetailView";
import { ProductDetailLayout } from "../modules/page_layout/ProductDetailLayout";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <PageLayoutView cover={CoverTypes.INFO}>
        <LandingView />
      </PageLayoutView>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: (
      <PageLayoutView cover={CoverTypes.INFO}>
        <MainView />
      </PageLayoutView>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayoutView>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "sign-up",
        element: <SignUpView />,
      },
      {
        path: "log-in",
        element: <LogInView />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordView />,
      },
      {
        path: "create-password",
        element: <CreatePasswordView />,
      },
      {
        path: "register",
        element: <RegisterView />,
      },
      {
        path: "my-account",
        element: <MyAccountView />,
      },
      {
        path: "edit-account",
        element: <EditAccountView />,
      },
      {
        path: "update-success",
        element: (
          <SuccessActionView msg="Your account has been updated successfully." />
        ),
      },
      {
        path: "delete-success",
        element: (
          <SuccessActionView msg="Your account has been deleted successfully. " />
        ),
      },
      {
        path: "delete-user",
        element: <DeleteAccountView />,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <ContactView />
      </PageLayoutView>
    ),
  },
  {
    path: "/about",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <AboutView />
      </PageLayoutView>
    ),
  },
  {
    path: "/package-tour",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayoutView>
    ),
    children: [
      {
        path: "ny-ba-pass",
        element: (
          <ProductsLayout
            sectionDescription="?????? ???????????????(New York Big Apple Pass)??? ????????? ???????????? ??????????????? ???????????? ?????? ?????? ???????????? TOP 37??? ???????????? ???????????? ?????? 64%?????? ???????????? ??? ?????? ?????? ????????? ??????????????????! ?????? ????????? ???????????? ?????????. ???????????? ????????? ????????? ???????????? ??????????????? ????????? ???????????? ??? ?????? ????????? ??????????????? ???????????? ???????????? ?????? ????????? ???????????????."
            sectionTitle="Big Apple Pass"
          >
            <BigApplePassView />
          </ProductsLayout>
        ),
      },
      {
        path: "ny-city-pass",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here"
            sectionTitle="NY City Pass"
          >
            <NYCityPassView />
          </ProductsLayout>
        ),
      },
      {
        path: "ny-explore-pass",
        element: (
          <ProductsLayout
            sectionDescription="The NEW YORK CityPass is a pass that combines admission tickets to 5 New York attractions."
            sectionTitle="NY Explore"
          >
            <NYExploreView />
          </ProductsLayout>
        ),
      },
    ],
  },
  {
    path: "/city-attractions",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayoutView>
    ),
    children: [
      {
        path: "observations",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Scenics"
          >
            <ObservationsView />
          </ProductsLayout>
        ),
      },
      {
        path: "rides-cruises",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Rides/Cruises"
          >
            <RidesAndCruisesView />
          </ProductsLayout>
        ),
      },
    ],
  },
  {
    path: "/guide-tour",
    element: (
      <PageLayoutView cover={CoverTypes.NORMAL}>
        <Outlet />
      </PageLayoutView>
    ),
    children: [
      {
        path: "manhattan-day",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Manhattan day"
          >
            <ObservationsView /> {/* THIS VIEW MUST TO BE ManhattanDayView */}
          </ProductsLayout>
        ),
      },
      {
        path: "manhattan-night",
        element: (
          <ProductsLayout
            sectionDescription="Text Goes here - Scenic, Rids/Cruises, Museum/Gallery page contents/layout are the same"
            sectionTitle="Manhattan night"
          >
            <RidesAndCruisesView />{" "}
            {/* THIS VIEW MUST TO BE ManhattanNightView */}
          </ProductsLayout>
        ),
      },
    ],
  },
  {
    path: "/musicals-and-shows",
    element: (
      <PageLayoutView cover={CoverTypes.SHOWS}>
        <ProductsLayout
          sectionDescription="?????? ???????????????(New York Big Apple Pass)??? ????????? ???????????? ??????????????? ???????????? ?????? ?????? ???????????? TOP 37??? ???????????? ???????????? ?????? 64%?????? ???????????? ??? ?????? ?????? ????????? ??????????????????! ?????? ????????? ???????????? ?????????. ???????????? ????????? ????????? ???????????? ??????????????? ????????? ???????????? ??? ?????? ????????? ??????????????? ???????????? ???????????? ?????? ????????? ???????????????."
          sectionTitle="Broadway Musicals / Shows"
        >
          <MusicalsAndShowsView />
        </ProductsLayout>
      </PageLayoutView>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <PageLayoutView cover={CoverTypes.NONE}>
        <ProductDetailLayout>
          <ProductDetailView />
        </ProductDetailLayout>
      </PageLayoutView>
    ),
  },
  {
    path: "/show-detail/:id",
    element: (
      <PageLayoutView cover={CoverTypes.NONE}>
        <ShowDetailView />
      </PageLayoutView>
    ),
  },
]);
