import { Tab } from "@headlessui/react";
import Qrgenerator from "../pages/qrgenerator";

const Section = () => {
  return (
    <>
      <Tab.Panel>
        {/* <section id="Records">
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Reference ID
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Status</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Seating</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">QR</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Alex Shatov
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">alexshatov@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $2,890.66
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">🇺🇸</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                              width="40"
                              height="40"
                              alt="Philip Harbach"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Philip Harbach
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">philip.h@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $2,767.04
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">🇩🇪</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                              width="40"
                              height="40"
                              alt="Mirko Fisuk"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Mirko Fisuk
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">mirkofisuk@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $2,996.00
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">🇫🇷</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                              width="40"
                              height="40"
                              alt="Olga Semklo"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Olga Semklo
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">olga.s@cool.design</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $1,220.66
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">🇮🇹</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                              width="40"
                              height="40"
                              alt="Burak Long"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            Burak Long
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">longburak@gmail.com</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $1,890.66
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">🇬🇧</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section> */}
      </Tab.Panel>
      <Tab.Panel>Content 2</Tab.Panel>
      <Tab.Panel>
        <Qrgenerator />
      </Tab.Panel>
      <Tab.Panel>Content 4</Tab.Panel>
    </>
  );
};

export default Section;
