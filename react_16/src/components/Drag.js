import React, { Component } from "react";
import styled from "styled-components";
import { Gesture } from "react-with-gesture";
import { Spring, animated, interpolate } from "react-spring/renderprops";
import { Elevation } from "Utils";

const Card = styled(animated.div)`
  max-width: 300px;
  height: 300px;
  background: #fff;
  ${Elevation[3]};
  margin: 24px auto;
  padding: 10px;
`;

const CardContainer = styled(animated.div)`
  width: 300px;
  margin: 25px auto;
  background: #f5f5f5;
`;

export default class Drag extends Component {
  onMouseUp = x => () => {
    if (x > 300) {
      alert("Add Item");
    } else if (x < 300) {
      alert("Remove Item");
    }
  };

  render() {
    return (
      <Gesture>
        {({ down, delta: [deltaX] }) => (
          <Spring
            native
            to={{
              x: down ? deltaX : 0
            }}
            immediate={name => down && name === "x"}
          >
            {({ x }) => (
              <CardContainer
                style={{
                  background: x.interpolate({
                    range: [-300, 300],
                    output: ["#FF0000", "#00BFFF"],
                    extrapolate: "clamp"
                  })
                }}
              >
                <Card
                  onMouseUp={this.onMouseUp(deltaX)}
                  onTouchEnd={this.onMouseUp(deltaX)}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, -100],
                      output: [0, 1]
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: "clamp"
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                >
                  <h1>Draggable</h1>
                </Card>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
