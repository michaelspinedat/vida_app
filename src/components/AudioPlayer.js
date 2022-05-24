import React, { useEffect, useRef, useState } from 'react'
import { View, ScrollView, Text, Button, StyleSheet } from 'react-native'
import Sound from "react-native-sound";
import Slider from "@react-native-community/slider";

const AudioPlayer = ({ audioPath }) => {

    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [state, setState] = useState("paused");
    const [music, setMusic] = useState(null);
    const isEditing = useRef(false);
    const timeout = useRef(null);

    const playComplete = (success) => {
        if (music) {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
            setState('paused');
            setCurrent(0);
            music.setCurrentTime(0);
        }
    }

    const play = async () => {

        if (music) {
            music.play(playComplete);
            setState('playing');
        } else {
            const temp = new Sound(audioPath, Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('no se pudo cargar el sonido', err)
                    return;
                } else {
                    setState('playing');
                    setDuration(temp.getDuration());
                    temp.play(playComplete);
                }
            });
            console.log("TEMPPPPP")
            setMusic(temp);
        };
    }


    useEffect(() => {

        timeout.current = setInterval(() => {
            console.log(music)
            if (music && music.isLoaded() && state === "playing" && !isEditing.current) {
                
                music.getCurrentTime((seconds, isPlaying) => {
                    current(seconds);
                })
            }
        }, 500);


        return () => {
            console.log("ADIÓS")
            if (music) {
                music.release();
                setMusic(null);
            }
            if (timeout.current) {
                clearInterval(timeout.current);
            }
        }
    }, []);


    const onSliderEditStart = () => {
        isEditing.current = true;
    }

    const onSliderEditEnd = () => {
        isEditing.current = false;
    }

    const onSliderEditing = value => {
        if (music) {
            music.setCurrentTime(value);
            setCurrent(value);
        }
    }


    const pause = () => {
        if (music)
            music.pause();

        setState('paused');
    }

    const stop = () => {
        if (music)
            music.stop();
    }

    const getAudioTimeString = (seconds) => {
        const h = parseInt(seconds / (60 * 60));
        const m = parseInt(seconds % (60 * 60) / 60);
        const s = parseInt(seconds % 60);

        return ((h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s));
    };



    return (
        <ScrollView>
            <View style={styles.btnContainer}>
                <Button onPress={play} title="Reproducir">
                </Button>
                <Button onPress={pause} title="Pausar">
                </Button>
                <Button onPress={stop} title="Restart">
                </Button>


            </View>
            <View style={styles.sliderContainer}>
                <Text> {getAudioTimeString(current)}</Text>
                <Slider
                    onTouchStart={onSliderEditStart}
                    onTouchEnd={onSliderEditEnd}
                    onValueChange={onSliderEditing}
                    value={current}
                    maximumValue={duration}
                    maximumTrackTintColor='gray'
                    minimumTrackTintColor='white'
                    thumbTintColor='white'
                    style={styles.slider}
                />

                <Text> {getAudioTimeString(duration)}</Text>
            </View>
        </ScrollView>
    )
}
export default AudioPlayer;

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },

    sliderContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
    },

    slider: {
        flex: 8,
        backgroundColor: "red",
        marginHorizontal: 8
    }
})