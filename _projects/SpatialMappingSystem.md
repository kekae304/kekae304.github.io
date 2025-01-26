---
layout: page
title: Spatial Mapping System
description: A LiDar powered spatial mapping device. 
img: assets/img/2DXProject.png
importance: 2
category: work
---

The Spatial Mapping using Time-of-Flight Project is an integrated 3D scanning system. The system is an economic, efficient, and simple system that can acquire distance every 11.25° of a full 360° rotation. The system consists of the TI MSP432E01Y Microcontroller, VL53L1X Time of Flight Sensor, and the 28BYJ-48 Stepper Motor.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Hallway.png" title="Spatial Mapping System" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/Output.png" title="Spatial Mapping System" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Photos of the Hallway and the Spatially Mapped Hallway. 
</div>

The sensor would determine the distance then transfer the data to the microcontroller through I2C communication which is then transferred to the PC via UART communication. The data transferred onto the PC is initially converted into Cartesian Coordinates through trigonometric formulas then is visualized using the Open3D library in Python. This data is plotted in a meshlike point cloud and displayed to the user. 
