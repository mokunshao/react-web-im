import React, { Component } from "react";
import "./sidebar.scss";
import { showDialog } from "../dialog/Dialog";
import { getToken } from "../../../data/token";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  showSetting = () => {
    showDialog({ type: 1 });
  };
  render() {
    let token = getToken();
    let username = token ? token.user.username : "未登录";
    return (
      <section className="sidebar">
        <div>
          <div>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-avatar" />
            </svg>
          </div>
          <div className="username">{username}</div>
        </div>
        <div>
          <div onClick={this.showSetting}>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-add" />
            </svg>
          </div>
          <div>
            <Link
              to="/login"
              onClick={() => {
                conn.close();
              }}
            >
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-quit" />
              </svg>
            </Link>
          </div>
        </div>
        <svg style={{ display: "none" }}>
          <symbol id="icon-avatar" viewBox="0 0 1024 1024">
            <path d="M510.964926 63.811328c-127.067001 2.704598-233.408981 46.907333-317.233108 130.822534C109.909737 278.547017 65.752028 385.002584 63.051523 512.208754c2.700505 127.20617 46.858214 232.782717 130.680295 316.695872 83.824127 83.916225 190.165084 128.118959 317.233108 130.823558 127.102816-2.704598 232.533031-46.907333 316.355111-130.823558 80.381725-80.500429 124.301004-180.904163 130.139989-301.251112l0-30.889521c-5.838985-120.311133-49.758264-220.750683-130.139989-301.218366C743.497956 110.718661 634.36542 66.436108 510.964926 63.811328L510.964926 63.811328zM786.588357 778.490423c-21.893636-10.499122-45.493124-21.884426-69.124334-24.509207-62.142316-5.28333-100.621698-14.896268-115.500571-29.79356-13.994736-14.895245-20.12434-35.927257-17.502629-63.061244 0.886183-16.635889 5.246491-26.282596 14.881942-30.67872 9.602705-4.363378 20.122293-28.90533 30.611182-72.67623 3.508917-13.156648 7.013741-23.657816 11.373025-31.564903 4.39203-7.875365 11.373025-24.51023 20.125363-51.676963 4.39203-19.260669 4.39203-30.645974-0.853437-33.270754-5.276167-2.623757-8.750291-3.510964-9.636474-2.623757l4.360308-19.293415c2.62171-12.238742 4.39203-27.133987 6.129604-43.769876 5.242398-43.802622-3.508917-81.4695-26.254967-113.000634-22.745027-32.417317-64.73128-49.052183-126.873596-50.824549-55.129598 0.88516-84.003206 22.803355-116.354008 49.937342-35.889395 28.021194-48.14758 65.688071-38.511105 113.886817 7.013741 35.896558 17.501606 65.688071 10.487865 63.063291-0.852414-0.886183-4.360308 0-8.751315 2.623757-4.359284 2.62478-5.244444 14.010085-1.736551 33.270754 9.636474 23.656793 16.616446 40.292682 21.859867 49.052183 5.27719 8.761548 8.751315 20.146852 11.373025 34.189683 8.78406 42.916439 17.502629 66.573231 27.139104 70.935586 9.636474 4.365424 15.766079 15.750729 19.23918 32.419364 4.39203 27.133987-0.852414 48.165999-16.617469 63.061244-15.732309 14.898315-53.358255 24.51023-112.87886 29.759791-21.86089 2.659573-48.114834 13.157671-69.12331 23.657816-67.355037-70.051449-106.751303-162.907277-107.635439-265.408789 2.654456-108.60451 40.280402-198.835557 112.87886-271.544533 72.632227-72.709999 162.764014-110.344131 271.251867-113.001657 108.519576 2.657526 198.621686 40.291658 270.399453 113.001657 72.632227 72.708975 110.224404 162.940023 112.845091 271.544533C893.33966 616.436584 853.943394 709.292412 786.588357 778.490423L786.588357 778.490423z" />
          </symbol>
          <symbol id="icon-quit" viewBox="0 0 1024 1024">
            <path d="M802.151864 143.681903c31.235972 22.212313 59.004583 47.37867 83.296916 75.486189 24.297287 28.115447 45.120277 58.481358 62.471944 91.10467 17.356621 32.624303 30.543292 67.159173 39.568933 103.600644 9.023659 36.441472 13.533507 73.402205 13.533507 110.886164 0 64.556918-12.320575 125.116314-36.960733 181.691069-24.64214 56.569801-57.962096 105.853091-99.955902 147.845906-41.993807 41.998761-91.277096 75.313762-147.850861 99.955902-56.56881 24.64115-117.134151 36.965688-181.684132 36.965688-63.860275 0-124.078781-12.324539-180.648582-36.965688C297.348198 929.610306 247.89149 896.295305 205.55283 854.296544c-42.343615-41.992816-75.661588-91.276106-99.955902-147.845906C81.300632 649.875883 69.155456 589.315496 69.155456 524.759569c0-36.787316 4.33643-72.883934 13.015236-108.282918 8.678806-35.398984 20.996408-69.064784 36.960733-100.99839 15.968289-31.926669 35.749783-61.774309 59.350427-89.536975 23.599653-27.768611 49.974978-52.757587 79.131921-74.968909 15.272637-11.107643 31.755233-15.271646 49.456708-12.496965 17.696519 2.781618 32.100087 11.454478 43.20872 26.030472 11.108634 14.58194 15.271646 30.890128 12.496965 48.938437-2.781618 18.047318-11.454478 32.622321-26.029481 43.732937-43.732937 31.926669-77.225319 71.144804-100.480119 117.652422-23.247863 46.507618-34.873777 96.483587-34.873777 149.930881 0 45.810975 8.67286 89.026632 26.030472 129.631116 17.351666 40.605475 41.123746 76.003468 71.316239 106.197944 30.201412 30.19943 65.599405 54.144928 106.20488 71.846402 40.606466 17.696519 83.813205 26.548743 129.631116 26.548743 45.810975 0 89.018704-8.852223 129.62517-26.548743 40.606466-17.701474 76.009414-41.646971 106.202899-71.846402 30.195466-30.194475 54.139973-65.592469 71.841447-106.197944 17.702465-40.606466 26.548743-83.820141 26.548743-129.631116 0-54.138982-12.490028-105.333829-37.478013-153.576613-24.99393-48.240803-60.048061-87.977208-105.161402-119.21318-15.272637-10.411991-24.468723-24.643131-27.592221-42.69045-3.12548-18.048309 0.518271-34.708287 10.930261-49.981915 10.411991-14.575003 24.64214-23.427227 42.69045-26.547752C770.229159 129.630125 786.880218 133.269912 802.151864 143.681903L802.151864 143.681903zM534.570544 527.888022c-18.0493 0-33.494364-6.421405-46.336182-19.264214-12.841818-12.840827-19.263223-28.286882-19.263223-46.335191L468.971138 66.634956c0-18.048309 6.420414-33.6658 19.263223-46.853462 12.841818-13.188654 28.286882-19.781494 46.336182-19.781494 18.738016 0 34.529915 6.59284 47.371733 19.781494 12.841818 13.187663 19.262232 28.805153 19.262232 46.853462l0 395.65366c0 18.047318-6.420414 33.493373-19.262232 46.335191C569.100458 521.466617 553.308559 527.888022 534.570544 527.888022L534.570544 527.888022z" />
          </symbol>
          <symbol id="icon-add" viewBox="0 0 1024 1024">
            <path
              d="M512 1024C229.229714 1024 0 794.770286 0 512S229.229714 0 512 0s512 229.229714 512 512-229.229714 512-512 512z m0-928C282.258286 96 96 282.258286 96 512S282.258286 928 512 928 928 741.741714 928 512 741.741714 96 512 96z m208.018286 463.981714h-160v160.036572a48.018286 48.018286 0 0 1-96.036572 0v-160.036572H303.981714a47.981714 47.981714 0 0 1 0-95.963428h160V304.018286a48.018286 48.018286 0 0 1 96.036572 0v160h160a47.981714 47.981714 0 0 1 0 95.963428z"
              fill=""
            />
          </symbol>
        </svg>
      </section>
    );
  }
}

export default Sidebar;
