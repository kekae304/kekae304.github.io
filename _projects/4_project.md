---
layout: page
title: Snake Game
description: Snake Game developed using Object Oriented Design principles. 
img: assets/img/SB1.jpg
importance: 3
category: work
---

Developed a Snake Game using object-oriented design principles for the COMP ENG 2SH4 course. Below is a snippet from the main project file. 

{% raw %}

```c++
#include <iostream>
#include "MacUILib.h"
#include "objPos.h"
#include "objPosArrayList.h"
#include "GameMechs.h"
#include "Player.h"

//using namespace std;

#define DELAY_CONST 100000

GameMechs* myGM;
Player* myPlayer;

void Initialize(void);
void GetInput(void);
void RunLogic(void);
void DrawScreen(void);
void LoopDelay(void);
void CleanUp(void);

int main(void)
{
    Initialize();

    while(myGM->getExitFlagStatus() == false)  
    {
        GetInput();
        RunLogic();
        DrawScreen();
        LoopDelay();
    }

    CleanUp();
}

void Initialize(void)
{
    MacUILib_init();
    MacUILib_clearScreen();

    myGM = new GameMechs(26,13);
    myPlayer = new Player(myGM);
    srand(time(NULL)); 
    
    objPos tempPos;
    myGM->generateFood(tempPos);
}

void GetInput(void)
{
    myGM->getInput();
}

void RunLogic(void)
{  
    myPlayer->updatePlayerDir();
    myPlayer->movePlayer();
    if (myPlayer->checkSelfCollision())
    {
        myGM->setLoseFlag();
        myGM->setExitTrue();
        return;
    }
    myGM->clearInput();
}

void DrawScreen(void)
{
    MacUILib_clearScreen();  

    bool drawn; 

    objPosArrayList* playerBody = myPlayer->getPlayerPos();
    objPos tempBody;

    objPos tempFoodPos;
    myGM->getFoodPos(tempFoodPos);

    //creating a for loop to iterate through Y values
    for (int i = 0; i < myGM->getBoardSizeY(); i++) 
    {   
        //creating a for loop to iterate through X values
        for (int j = 0; j < myGM->getBoardSizeX(); j++) 
        {
            drawn = false;
            //creating a for loop to print each of the elements in the snake
            for (int k = 0; k < playerBody->getSize(); k++)
            {
                playerBody->getElement(tempBody, k);
                if (tempBody.x == j && tempBody.y == i)
                {
                    MacUILib_printf("%c", tempBody.symbol);
                    drawn = true;
                    break;
                }
            }
            //coninuing if we've drawn the player
            if (drawn)
            {
                continue;
            }
            //printing the border
            if (i == 0 || i == myGM->getBoardSizeY() - 1 || j == 0 || j == myGM->getBoardSizeX() - 1)
            {
                MacUILib_printf("%c",'#');
            } 
            //printing the food pos
            else if (i == tempFoodPos.y &&  j == tempFoodPos.x)
            {
                MacUILib_printf("%c", tempFoodPos.symbol);
            }
            //printing blank spaces
            else
            {
                MacUILib_printf("%c",' ');
            }
        }
        MacUILib_printf("\n");
    }
    //printing the score
    MacUILib_printf("Score: %d\n", myGM->getScore()); 
    //printing debugging messages
    MacUILib_printf("===== DEBUG MESSAGES =====\n");
    MacUILib_printf("Player Positions:\n");
    for (int l = 0; l < playerBody->getSize(); l++)
    {
        playerBody->getElement(tempBody, l);
        MacUILib_printf("<%d, %d> ", tempBody.x, tempBody.y);
    }

    MacUILib_printf("\nBoard Size: %dx%d", myGM->getBoardSizeX(), myGM->getBoardSizeY());
    MacUILib_printf("\nFood Pos: <%d, %d> + %c\n", tempFoodPos.x, tempFoodPos.y, tempFoodPos.symbol);
}

void LoopDelay(void)
{
    MacUILib_Delay(DELAY_CONST); // 0.1s delay
}

void CleanUp(void)
{
    MacUILib_clearScreen();   
    //printing either losing screen or exit screen 
    myGM->getLoseFlagStatus() ? (MacUILib_printf("You Lost! Final Score: %d\n", myGM->getScore())) : (MacUILib_printf("Game Exited\n"));
    MacUILib_uninit();
    //removing the heap instances
    delete myGM;
    delete myPlayer;
}
```

{% endraw %}

Our design drew inspiration from successful bots of the past, incorporating key components such as the HC-SR04 ultrasonic sensor for distance measurement, the KY-033 line tracking sensor for navigation, and the MX-1508 brushed DC motor driver for efficient motor control.
