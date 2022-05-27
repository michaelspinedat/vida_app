import React, { useEffect, useRef, useState } from 'react'
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native'
import Sound from "react-native-sound";
import Slider from "@react-native-community/slider";

export default class AudioPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playState: 'paused', //playing, paused
            playSeconds: 0,
            duration: 0
        }
        this.sliderEditing = false;
    }

    componentDidMount() {
        this.play();

        this.timeout = setInterval(() => {
            if (this.sound && this.sound.isLoaded() && this.state.playState == 'playing' && !this.sliderEditing) {
                this.sound.getCurrentTime((seconds, isPlaying) => {
                    this.setState({ playSeconds: seconds });
                })
            }
        }, 100);
    }
    componentWillUnmount() {
        if (this.sound) {
            this.sound.release();
            this.sound = null;
        }
        if (this.timeout) {
            clearInterval(this.timeout);
        }
    }

    onSliderEditStart = () => {
        this.sliderEditing = true;
    }
    onSliderEditEnd = () => {
        this.sliderEditing = false;
    }
    onSliderEditing = value => {
        if (this.sound) {
            this.sound.setCurrentTime(value);
            this.setState({ playSeconds: value });
        }
    }

    play = async () => {
        if (this.sound) {
            this.sound.play(this.playComplete);
            this.setState({ playState: 'playing' });
        } else {
            const filepath = this.props.audioPath;

            this.sound = new Sound(filepath, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    Alert.alert('Notice', 'audio file error. (Error code : 1)');
                    this.setState({ playState: 'paused' });
                } else {
                    this.setState({ playState: 'playing', duration: this.sound.getDuration() });
                    this.sound.play(this.playComplete);
                }
            });
        }
    }
    playComplete = (success) => {
        if (this.sound) {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
                Alert.alert('Notice', 'audio file error. (Error code : 2)');
            }
            this.setState({ playState: 'paused', playSeconds: 0 });
            this.sound.setCurrentTime(0);
        }
    }

    pause = () => {
        if (this.sound) {
            this.sound.pause();
        }

        this.setState({ playState: 'paused' });
    }

    jumpPrev15Seconds = () => { this.jumpSeconds(-15); }
    jumpNext15Seconds = () => { this.jumpSeconds(15); }
    jumpSeconds = (secsDelta) => {
        if (this.sound) {
            this.sound.getCurrentTime((secs, isPlaying) => {
                let nextSecs = secs + secsDelta;
                if (nextSecs < 0) nextSecs = 0;
                else if (nextSecs > this.state.duration) nextSecs = this.state.duration;
                this.sound.setCurrentTime(nextSecs);
                this.setState({ playSeconds: nextSecs });
            })
        }
    }

    getAudioTimeString(seconds) {
        const h = parseInt(seconds / (60 * 60));
        const m = parseInt(seconds % (60 * 60) / 60);
        const s = parseInt(seconds % 60);

        return ((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
    }

    render() {

        const currentTimeString = this.getAudioTimeString(this.state.playSeconds);
        const durationString = this.getAudioTimeString(this.state.duration);

        return (
            <View style={styles.container}>

                <View style={styles.btnContainer}>
                    {this.state.playState == 'playing' &&
                        <Button onPress={this.pause} title="Pausar" />
                    }
                    {this.state.playState == 'paused' &&
                        <Button onPress={this.play} title="Reproducir" />
                    }
                </View>
                <View style={styles.sliderContainer}>
                    <Text style={styles.strTime}>{currentTimeString}</Text>
                    <Slider
                        onTouchStart={this.onSliderEditStart}
                        onTouchEnd={this.onSliderEditEnd}
                        onValueChange={this.onSliderEditing}
                        value={this.state.playSeconds} maximumValue={this.state.duration} maximumTrackTintColor='gray' minimumTrackTintColor='white' thumbTintColor='white'
                        style={styles.slider} />
                    <Text style={styles.strTime}>{durationString}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black'
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15
    },

    sliderContainer: {
        marginVertical: 15,
        marginHorizontal: 15,
        flexDirection: 'row'
    },

    strTime: {
        color: 'white',
        alignSelf: 'center'
    },

    slider: {
        flex: 1,
        alignSelf: 'center',
        marginHorizontal: Platform.select({ ios: 5 })
    }
})