import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View
        dangerouslySetInnerHTML={{
          __html: `
          <span>
            1
            <span>
              2
              <span>
                3
                <span>
                  4
                  <span>
                    5
                    <span>
                      6
                      <span>
                       7(不能解析)
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
      `,
        }}
      ></View>
    );
  }
}
