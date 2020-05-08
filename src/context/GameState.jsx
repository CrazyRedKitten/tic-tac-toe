import React, { useReducer } from "react";
import GameReducer from "./GameReducer";
import GameContext from "./GameContext";

import {CHANGE_GRID_ITEM_STATE, RESTART_GAME,CHANGE_COLOR_SCHEME,CHANGE_GAME_MODE} from './Types'


const GameState = ({children}) => {

    const initialState = {
        //each filed represent GridItem's state
        //false - the field clear, 'cross' - cross (Player 1), 'circle' - circle (Player 2)
        win: false,
        // winner state 0 - draw, 1 - first player, 2 - second player
        winner:0,
        field_1: false,
        field_2: false,
        field_3: false,
        field_4: false,
        field_5: false,
        field_6: false,
        field_7: false,
        field_8: false,
        field_9: false,
        turnCount:0,
        // true for 2 players, false for 1 player
        gameMode: true,
        //Player turn true for first player and false for second player
        playerTurn: true,
        isGameOver: false,
        playerColorScheme: 1,
    }

    const [state, dispatch] = useReducer(GameReducer, initialState);

    const changeGridItemState = (gridID, gridValue) => {
        dispatch({
            type: CHANGE_GRID_ITEM_STATE,
            payload: {gridID, gridValue}
        })
    }

    const restartGame = () => {
        dispatch({
            type: RESTART_GAME
        })
    }

    const changeColorScheme = (colorSchemeNumber) => {
        dispatch({
            type: CHANGE_COLOR_SCHEME,
            payload: colorSchemeNumber
        })
    }

    const changeGameMode = () => {
        dispatch({
            type: CHANGE_GAME_MODE,
        })
    }

    const colorSchemeHandler = (playerColorScheme) => {
        switch (playerColorScheme) {
            case 1:
            default:
                return {playerOneColor:'#FD6B15', playerTwoColor:'#158DFD'}
            case 2:
                return {playerOneColor:'#DB6570', playerTwoColor:'#71DB65'}
            case 3:
                return {playerOneColor:'#9dd1e9', playerTwoColor:'#e9b69d'}
            case 4:
                return {playerOneColor:'#87cd1e', playerTwoColor:'#CD1E87'}
            case 5:
                return {playerOneColor:'#E144F9', playerTwoColor:'#F9ed44'}
        }
    }

    return (
        <GameContext.Provider
            value={{
                win: state.win,
                winner:state.winner,
                field_1: state.field_1,
                field_2: state.field_2,
                field_3: state.field_3,
                field_4: state.field_4,
                field_5: state.field_5,
                field_6: state.field_6,
                field_7: state.field_7,
                field_8: state.field_8,
                field_9: state.field_9,
                gameMode: state.gameMode,
                isGameOver: state.isGameOver,
                playerTurn: state.playerTurn,
                turnCount: state.turnCount,
                playerColorScheme: state.playerColorScheme,
                restartGame,
                changeGameMode,
                changeGridItemState,
                changeColorScheme,
                colorSchemeHandler,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export default GameState;