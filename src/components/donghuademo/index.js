import React, { Component } from 'react';

import {Motion, spring} from 'react-motion';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

 class MotionSpring extends Component {
  state = {
    height: 38
  }
  animate = () => {
    this.setState((state) => ({ height: state.height === 240 ? 38 : 240 }))
  }
  render() {
    return (
      <div className="App">
        <div style={styles.button} onClick={this.animate}>Animate</div>
        <Motion style={{ height: spring(this.state.height) }}>
          {
            ({ height }) => <div style={Object.assign({}, styles.menu, { height } )}>
              <p style={styles.selection}>Selection 1</p>
              <p style={styles.selection}>Selection 2</p>
              <p style={styles.selection}>Selection 3</p>
              <p style={styles.selection}>Selection 4</p>
              <p style={styles.selection}>Selection 5</p>
              <p style={styles.selection}>Selection 6</p>
            </div>
          }
        </Motion>
      </div>
    );
  }
}

const styles = {
  menu: {
    overflow: 'hidden',
    border: '2px solid #ddd',
    width: 300,
    marginTop: 20,
  },
  selection: {
    padding: 10,
    margin: 0,
    borderBottom: '1px solid #ededed'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    cursor: 'pointer',
    width: 200,
    height: 45,
    border: 'none',
    borderRadius: 4,
    backgroundColor: '#ffc107',
  },
}



export  class Animatedss extends Component {
  animatedValue = new Animated.Value(0)
  animate = () => {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1)
      }
    ).start();
  }
  render() {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, 0],
    })
    return (
      <div className="App">
          <div style={styles.button} onClick={this.animate}>Animate</div>
          <Animated.div
            style={
              Object.assign(
                {},
                styles.box,
                { opacity: this.animatedValue, marginLeft })}>
                <p>Thanks for your submission!</p>
            </Animated.div>
      </div>
    );
  }
}


export default class PhotoPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0)
        };
    }

    handleClick = () => {
        const { anim } = this.state;
        anim.stopAnimation(value => {
            Animated.spring(anim, {
                toValue: Math.round(value) + 1
            }).start();
        });
    }

    render() {
        const { anim } = this.state;

        const rotateDegree = anim.interpolate({
            inputRange: [0, 4],
            outputRange: ['0deg', '360deg']
        });

        return (
            <div style={{height:'100px',width: '100px',marginTop: '300px'}}>
                <button onClick={this.handleClick}>向右翻转</button>
                <Animated.div
                    style={{
                        transform: [{
                            rotate: rotateDegree
                        }]
                    }}
                    className="preivew-wrapper"
                >
                    <img
                        alt="img"
                        src="http://www.runoob.com/images/tryitimg.gif"
                    />
                </Animated.div>
            </div>
        );
    }
}