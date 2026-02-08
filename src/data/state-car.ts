export interface StateProperty {
  name: string;
  type: string;
  description: string;
  notes?: string;
}

export const stateCarProperties: StateProperty[] = [
  {
    name: "aabbCenter",
    type: "vec3",
    description: "Center of AABB (calculated from LOD D or collider mesh).",
  },
  {
    name: "aabbSize",
    type: "vec3",
    description:
      "Size of AABB in meters (calculated from LOD D or collider mesh).",
  },
  {
    name: "absInAction",
    type: "boolean",
    description: "ABS is currently intervening.",
    notes: "Physics-only",
  },
  {
    name: "absMode",
    type: "integer",
    description: "0 for disabled ABS.",
    notes: "Physics-only",
  },
  {
    name: "absModes",
    type: "integer",
    description: "0 if ABS is not present.",
    notes: "Physics-only",
  },
  {
    name: "acceleration",
    type: "vec3",
    description:
      "G-forces, X for sideways relative to car, Z for forwards/backwards.",
  },
  {
    name: "activeLOD",
    type: "integer",
    description: "0-based index of visible LOD.",
  },
  {
    name: "adjustableTurbo",
    type: "boolean",
    description: "Whether the turbo is adjustable.",
    notes: "Physics-only",
  },
  { name: "aeroDrag", type: "number", description: "Aero drag coefficient." },
  {
    name: "aeroLiftFront",
    type: "number",
    description: "Aero lift coefficient in front.",
  },
  {
    name: "aeroLiftRear",
    type: "number",
    description: "Aero lift coefficient in rear.",
  },
  {
    name: "aiAggression",
    type: "number",
    description:
      "AI aggression from 0 to 1 (or -1 if there is no AI). Note: aggression level set in a launcher will be multiplied by 0.95, so 100% aggression will show up as 0.95 here.",
  },
  {
    name: "aiLapsLeft",
    type: "integer",
    description: "Number of laps left to make for AI before going to pits.",
  },
  {
    name: "aiLevel",
    type: "number",
    description: "AI level from 0 to 1 (or -1 if there is no AI).",
  },
  {
    name: "altitude",
    type: "number",
    description: "Altitude in meters above sea level.",
  },
  {
    name: "ambientOcclusion",
    type: "number",
    description:
      "Ambient occlusion value computed from prebaked data from track's VAO patch. 0 for car fully shadowed (in a tunnel), 1 for car outside. Affected by WeatherFX adjustments.",
  },
  {
    name: "angularVelocity",
    type: "vec3",
    description: "Angular velocity of the car.",
  },
  {
    name: "anyFlamesActive",
    type: "boolean",
    description: "True if any of car flames are currently shown.",
  },
  {
    name: "autoClutch",
    type: "boolean",
    description: "Returns true if auto-clutch is active.",
    notes: "Physics-only",
  },
  {
    name: "autoShift",
    type: "boolean",
    description: "Returns true if automatic shifting is active.",
    notes: "Physics-only",
  },
  {
    name: "awdCenterLock",
    type: "number",
    description: "AWD center lock value.",
    notes: "Physics-only",
  },
  {
    name: "awdFrontShare",
    type: "number",
    description: "AWD front torque share.",
    notes: "Physics-only",
  },
  { name: "ballast", type: "number", description: "Ballast in kg." },
  {
    name: "batteryVoltage",
    type: "number",
    description: "Current battery voltage.",
  },
  {
    name: "bestLapFromGhost",
    type: "boolean",
    description:
      "If true, lapTimeMs is not from this session, but from the ghost player is racing against. Can't be true online.",
  },
  {
    name: "bestLapSplits",
    type: "integer[]",
    description:
      "Splits times of best lap (not necessarily best split times in itself), in milliseconds. Items start with 0.",
  },
  {
    name: "bestLapTimeMs",
    type: "integer",
    description: "Time of best lap of this session in milliseconds.",
  },
  {
    name: "bestSplits",
    type: "integer[]",
    description:
      "Best splits times (and not splits of best lap), in milliseconds, unlike other split lists, this one is populated with zeroes for sectors without time from the start. Items start with 0.",
  },
  {
    name: "bodyTransform",
    type: "mat4x4",
    description: "Car visual transformation (the one applied to 3D model).",
  },
  {
    name: "bodyWetness",
    type: "number",
    description:
      "How wet is car exterior, approximation from 0 to 1 (actual wetness is in 2D map).",
  },
  { name: "brake", type: "number", description: "Brake, from 0 to 1." },
  {
    name: "brakeBias",
    type: "number",
    description: "Current brake bias.",
    notes: "Physics-only",
  },
  {
    name: "brakeLightsActive",
    type: "boolean",
    description: "True if brake lights are on.",
  },
  {
    name: "brakesBiasLimitDown",
    type: "number",
    description: "Lower limit for brake bias.",
    notes: "Physics-only",
  },
  {
    name: "brakesBiasLimitUp",
    type: "number",
    description: "Upper limit for brake bias.",
    notes: "Physics-only",
  },
  {
    name: "brakesBiasStep",
    type: "number",
    description: "Step size for brake bias adjustment.",
    notes: "Physics-only",
  },
  {
    name: "brakesCockpitBias",
    type: "boolean",
    description: "Whether brake bias can be adjusted from the cockpit.",
    notes: "Physics-only",
  },
  {
    name: "carCamerasCount",
    type: "integer",
    description: "Number of F6 cameras.",
  },
  { name: "caster", type: "number", description: "Caster angle in degrees." },
  {
    name: "cgHeight",
    type: "number",
    description: "Center of gravity height.",
  },
  {
    name: "clutch",
    type: "number",
    description: "Clutch, from 0 to 1 (1 for pedal fully depressed).",
  },
  {
    name: "collidedWith",
    type: "integer",
    description: "0 for track, non-zero for cars.",
  },
  {
    name: "collisionDepth",
    type: "number",
    description: "How deep is current collision, in meters.",
  },
  {
    name: "collisionPosition",
    type: "vec3",
    description: "Coordinates of current collision in car space.",
  },
  {
    name: "compass",
    type: "number",
    description:
      "Angle of where car is heading, from 0 to 360 (0/360 for north, 90 for east, etc.)",
  },
  {
    name: "compoundIndex",
    type: "integer",
    description: "Index of currently selected tyre compounds.",
  },
  {
    name: "currentEngineBrakeSetting",
    type: "integer",
    description: "Current engine brake setting index.",
  },
  {
    name: "currentPenaltyParameter",
    type: "integer",
    description: "Parameter of current penalty (role depends on penalty type).",
  },
  {
    name: "currentPenaltyType",
    type: "ac.PenaltyType",
    description: "Current penalty type (set only for user car).",
  },
  {
    name: "currentSector",
    type: "integer",
    description: "0-based index of current track split.",
  },
  {
    name: "currentSplits",
    type: "integer[]",
    description:
      "Time for different splits of current lap, in milliseconds. Items start with 0.",
  },
  {
    name: "customCarColor",
    type: "rgb",
    description:
      "Custom car color selected online, or math.nan if color is the default one",
  },
  {
    name: "damage",
    type: "number[]",
    description:
      "Damage values from 0 to maximum collision speed in km/h for four different zones (fifth one is not really used). 5 items, starts with 0.",
  },
  {
    name: "daytimeRunningLights",
    type: "boolean",
    description: "True if DRLs are active.",
  },
  {
    name: "differentialCoast",
    type: "number",
    description: "Differential coast setting.",
    notes: "Physics-only",
  },
  {
    name: "differentialPower",
    type: "number",
    description: "Differential power setting.",
    notes: "Physics-only",
  },
  {
    name: "differentialPreload",
    type: "number",
    description: "Differential preload setting.",
    notes: "Physics-only",
  },
  { name: "dirt", type: "number", description: "Body dirt level from 0 to 1." },
  {
    name: "distanceDrivenSessionKm",
    type: "number",
    description: "Distance driven in current session in km.",
  },
  {
    name: "distanceDrivenTotalKm",
    type: "number",
    description: "Total distance driven in km.",
  },
  {
    name: "distanceToCamera",
    type: "number",
    description: "Distance to camera in meters.",
  },
  {
    name: "driftComboCounter",
    type: "integer",
    description: "Drift combo counter (calculated in any racing mode).",
  },
  {
    name: "driftInstantPoints",
    type: "number",
    description: "Drift instant points (calculated in any racing mode).",
  },
  {
    name: "driftPoints",
    type: "number",
    description: "Drift points (calculated in any racing mode).",
  },
  {
    name: "driverEyesPosition",
    type: "vec3",
    description:
      "In-car coordinates for driver eyes position (can be changed by user).",
  },
  {
    name: "drivetrainPower",
    type: "number",
    description: "Current drivetrain power output.",
    notes: "Physics-only",
  },
  {
    name: "drivetrainSpeed",
    type: "number",
    description: "Speed delivered to wheels.",
  },
  {
    name: "drivetrainTorque",
    type: "number",
    description: "Current drivetrain torque output.",
    notes: "Physics-only",
  },
  {
    name: "drsActive",
    type: "boolean",
    description: "True if DRS is currently deployed.",
    notes: "Physics-only",
  },
  {
    name: "drsAvailable",
    type: "boolean",
    description: "True if DRS is available to be used.",
    notes: "Physics-only",
  },
  {
    name: "drsPresent",
    type: "boolean",
    description: "True if the car is equipped with DRS.",
    notes: "Physics-only",
  },
  {
    name: "drivenInRace",
    type: "number",
    description: "Distance driven in current race in meters.",
  },
  {
    name: "engagedGear",
    type: "integer",
    description:
      "Current gear, 0 for neutral, -1 for reverse. Goes through 0 on sequential shifts",
  },
  {
    name: "engineBrakeSettingsCount",
    type: "integer",
    description: "Number of available engine brake settings.",
  },
  {
    name: "engineLifeLeft",
    type: "number",
    description: "Engine life left (1000 for new engine, breaks at 0).",
  },
  {
    name: "enginePosition",
    type: "integer",
    description: "0 for unspecified, 1 for front, 2 for rear, 3 for mid.",
    notes: "Physics-only",
  },
  {
    name: "estimatedLapTimeMs",
    type: "integer",
    description:
      "Based on best lap and performance meter (delta of this lap time vs best lap time).",
  },
  {
    name: "exhaustTemperature",
    type: "number",
    description: "Current exhaust temperature.",
  },
  {
    name: "exposureInside",
    type: "number",
    description: "Onboard exposure from car.ini",
  },
  {
    name: "exposureOutside",
    type: "number",
    description: "Outboard exposure from car.ini",
  },
  {
    name: "extendedPhysics",
    type: "boolean",
    description: "True if extended car physics is active.",
  },
  { name: "extraA", type: "boolean", description: "Extra switch A state." },
  { name: "extraB", type: "boolean", description: "Extra switch B state." },
  { name: "extraC", type: "boolean", description: "Extra switch C state." },
  { name: "extraD", type: "boolean", description: "Extra switch D state." },
  { name: "extraE", type: "boolean", description: "Extra switch E state." },
  { name: "extraF", type: "boolean", description: "Extra switch F state." },
  { name: "extraG", type: "boolean", description: "Extra switch G state." },
  { name: "extraH", type: "boolean", description: "Extra switch H state." },
  { name: "extraI", type: "boolean", description: "Extra switch I state." },
  { name: "extraJ", type: "boolean", description: "Extra switch J state." },
  { name: "extraK", type: "boolean", description: "Extra switch K state." },
  { name: "extraL", type: "boolean", description: "Extra switch L state." },
  { name: "extraM", type: "boolean", description: "Extra switch M state." },
  { name: "extraN", type: "boolean", description: "Extra switch N state." },
  { name: "extraO", type: "boolean", description: "Extra switch O state." },
  { name: "extraP", type: "boolean", description: "Extra switch P state." },
  { name: "extraQ", type: "boolean", description: "Extra switch Q state." },
  { name: "extraR", type: "boolean", description: "Extra switch R state." },
  { name: "extraS", type: "boolean", description: "Extra switch S state." },
  { name: "extraT", type: "boolean", description: "Extra switch T state." },
  {
    name: "extraIconsCount",
    type: "integer",
    description: "Extra driver icons set with ui.UserIconsLayer().",
  },
  {
    name: "extrapolatedLapTimeMs",
    type: "integer",
    description: "Graphics-corrected time of current lap in milliseconds.",
  },
  {
    name: "extrapolatedMovement",
    type: "boolean",
    description:
      "If set to false and you're adding objects moving close to cars, use ac.CarState.timestamp to estimate dt.",
  },
  {
    name: "ffbBase",
    type: "number",
    description: "Value of FFMULT from car.ini.",
  },
  {
    name: "ffbFinal",
    type: "number",
    description: "Final FFB value sent to wheel.",
  },
  {
    name: "ffbMultiplier",
    type: "number",
    description: "For 100% FFB multiplier, this value is set to 1.",
  },
  {
    name: "ffbPure",
    type: "number",
    description: "Pure FFB value before multipliers.",
  },
  {
    name: "ffbSteerAssist",
    type: "number",
    description: "Value of STEER_ASSIST from car.ini. Broken until 0.3.0.",
  },
  {
    name: "flashingLightsActive",
    type: "boolean",
    description: "True if flashing lights (strobe) are active.",
  },
  {
    name: "focused",
    type: "boolean",
    description: "True if the camera is focused on this car.",
  },
  {
    name: "focusedOnInterior",
    type: "boolean",
    description: "True if the camera is focused on the interior of this car.",
  },
  { name: "fuel", type: "number", description: "Remaining fuel in liters." },
  { name: "fuelMap", type: "integer", description: "Current fuel map preset." },
  {
    name: "fuelMaps",
    type: "integer",
    description: "Number of available fuel maps.",
  },
  {
    name: "fuelPerLap",
    type: "number",
    description:
      "Uses original AC fuel estimation. Zero until value is available.",
    notes: "Physics-only",
  },
  { name: "gas", type: "number", description: "Throttle, from 0 to 1." },
  {
    name: "gear",
    type: "integer",
    description:
      "Current gear, 0 for neutral, -1 for reverse. Does not go through 0 on sequential shifts",
  },
  {
    name: "gearCount",
    type: "integer",
    description: "Excluding neutral and reverse.",
    notes: "Physics-only",
  },
  {
    name: "gearboxDamage",
    type: "number",
    description: "Gearbox damage (0 for new gearbox, 1 for non-functional).",
  },
  {
    name: "graphicsOffset",
    type: "vec3",
    description: "Graphics offset from car.ini",
  },
  {
    name: "graphicsPitchRotation",
    type: "number",
    description: "Graphics pitch rotation in radians from car.ini",
  },
  {
    name: "graphicsToPhysicsTransform",
    type: "mat4x4",
    description:
      "Graphics-to-physics transform based on graphics offset and pitch rotation from car.ini",
  },
  {
    name: "groundDistance",
    type: "number",
    description:
      "Distance of ground below car (defines ground plane together with normal).",
  },
  {
    name: "groundNormal",
    type: "vec3",
    description: "Normal of ground below car.",
  },
  {
    name: "hShifter",
    type: "boolean",
    description: "True if car has H-shifter in its physics data.",
  },
  { name: "handbrake", type: "number", description: "Handbrake, from 0 to 1." },
  {
    name: "hasAnalogTelltale",
    type: "boolean",
    description: "Car has max RPM arrow.",
  },
  {
    name: "hasCockpitERSDelivery",
    type: "boolean",
    description: "Car has cockpit ERS delivery adjustment.",
  },
  {
    name: "hasCockpitERSRecovery",
    type: "boolean",
    description: "Car has cockpit ERS recovery adjustment.",
  },
  {
    name: "hasCockpitMGUHMode",
    type: "boolean",
    description: "Car has cockpit MGU-H mode adjustment.",
  },
  {
    name: "hasCockpitSwitchForUserSpeedLimiter",
    type: "boolean",
    description: "Car has a cockpit switch for the speed limiter.",
    notes: "Physics-only",
  },
  {
    name: "hasEngineBrakeSettings",
    type: "boolean",
    description: "Car has engine brake settings.",
  },
  {
    name: "hasFlashingLights",
    type: "boolean",
    description: "Car has flashing lights (strobe).",
  },
  {
    name: "hasHornAudioEvent",
    type: "boolean",
    description: "Car has a horn audio event defined.",
  },
  {
    name: "hasLowBeams",
    type: "boolean",
    description:
      "If set to false, low beams are not present (headlights operate in a single mode).",
  },
  {
    name: "hasTurningLights",
    type: "boolean",
    description:
      "There could be other components linked to turn signals state, but this variable is about emissives tied to turn signals.",
  },
  {
    name: "hasUserBrakeBias",
    type: "boolean",
    description: "Car allows user to adjust brake bias.",
    notes: "Physics-only",
  },
  {
    name: "hazardLights",
    type: "boolean",
    description: "True if hazard lights are on.",
  },
  {
    name: "headlightsActive",
    type: "boolean",
    description: "True if headlights are on.",
  },
  {
    name: "headlightsAreHeadlights",
    type: "boolean",
    description:
      "If set to false, headlights do something else (like change display mode).",
  },
  {
    name: "headlightsColor",
    type: "rgb",
    description: "Color of the headlights.",
  },
  {
    name: "highBeams",
    type: "boolean",
    description:
      "true if high beams are currently active (either with headlights active, or with high beams flashing).",
  },
  {
    name: "hornActive",
    type: "boolean",
    description: "True if horn is currently active.",
  },
  { name: "index", type: "integer", description: "0-based (0 for first car)." },
  {
    name: "isActive",
    type: "boolean",
    description:
      "True if car is currently active (changes to false for disconnected cars if server does not have them visible).",
  },
  {
    name: "isAIControlled",
    type: "boolean",
    description: "True if car is controlled by AI (or that autopilot thing).",
  },
  {
    name: "isAIGoingToPits",
    type: "boolean",
    description: "True if AI is going to go to pits when possible.",
  },
  {
    name: "isAIUsingRainTyres",
    type: "boolean",
    description: "True if AI is using rain tyres now.",
  },
  {
    name: "isCameraOnBoard",
    type: "boolean",
    description: "True if camera is inside this car.",
  },
  {
    name: "isChangingTyres",
    type: "string",
    description: "Car is in pits and is currently having its tyres changed.",
  },
  {
    name: "isConnected",
    type: "boolean",
    description:
      "True if car is currently connected (cars can be disconnected online), or if car is not a remote one.",
  },
  {
    name: "isDriftBonusOn",
    type: "boolean",
    description: "Drift bonus flag (calculated in any racing mode).",
  },
  {
    name: "isDriftCar",
    type: "boolean",
    description:
      "Car counts as a drift car if it has a corresponding tag or “drift” in its name.",
  },
  {
    name: "isDriftValid",
    type: "boolean",
    description: "Is drift valid (calculated in any racing mode).",
  },
  {
    name: "isDriverDoorOpen",
    type: "boolean",
    description: "True if driver door is open.",
  },
  {
    name: "isDriverSeatbeltOn",
    type: "boolean",
    description: "Same as SEATBELT input.",
  },
  {
    name: "isDriverVisible",
    type: "boolean",
    description: "Driver can be hidden by apps or Lua scripts too.",
  },
  {
    name: "isEngineDiesel",
    type: "boolean",
    description: "Check is based on car tags.",
  },
  {
    name: "isEngineLimiterOn",
    type: "boolean",
    description: "True if engine limiter is active.",
  },
  {
    name: "isGearGrinding",
    type: "boolean",
    description: "True if gears are currently grinding.",
  },
  {
    name: "isHidingLabels",
    type: "boolean",
    description:
      "If you're drawing a map, don't show cars with this flag on. Flag can change during the race",
  },
  {
    name: "isKunosCar",
    type: "boolean",
    description: "True if car is standard, from Kunos.",
  },
  {
    name: "isLapValid",
    type: "boolean",
    description: "True if current lap is valid.",
    notes: "Physics-only",
  },
  {
    name: "isLastLapValid",
    type: "boolean",
    description: "True if last lap was valid.",
  },
  {
    name: "isLeftHandDrive",
    type: "boolean",
    description: "If set to true, steering wheel is on the left side.",
  },
  {
    name: "isOpenWheeler",
    type: "boolean",
    description: "Check is based on car tags.",
  },
  {
    name: "isRaceFinished",
    type: "boolean",
    description:
      "Car has finished the race. Since 0.2.8, non-race sessions are never marked as finished.",
  },
  {
    name: "isRacingCar",
    type: "boolean",
    description:
      "True for racing cars (cars with class different from “road” or “street”).",
  },
  {
    name: "isRallyCar",
    type: "boolean",
    description:
      "Car counts as a rally car if it has a corresponding tag or “rally” in its name.",
  },
  {
    name: "isRefueling",
    type: "string",
    description: "Car is in pits and is currently being refueled.",
  },
  {
    name: "isRemote",
    type: "boolean",
    description: "True if car is controlled by another player online.",
  },
  {
    name: "isRepairing",
    type: "string",
    description: "Car is in pits and is currently being repaired.",
  },
  {
    name: "isRequestingPitStop",
    type: "boolean",
    description: "True if car is requesting to go to pits.",
  },
  {
    name: "isRetired",
    type: "boolean",
    description: "True if car has retired from the session.",
  },
  {
    name: "isUserControlled",
    type: "boolean",
    description:
      "True if car is controlled by user (controls could be disabled completely).",
  },
  {
    name: "isInPit",
    type: "boolean",
    description: "True if car is parked in its pit stop place.",
  },
  {
    name: "isInPitlane",
    type: "boolean",
    description: "True if car is in pits area.",
  },
  {
    name: "justJumped",
    type: "boolean",
    description: "Changes to true for a single frame when car jumps.",
  },
  {
    name: "kersButtonPressed",
    type: "boolean",
    description: "True if KERS button is pressed.",
    notes: "Physics-only",
  },
  {
    name: "kersCharge",
    type: "number",
    description: "Current KERS charge level.",
  },
  {
    name: "kersCharging",
    type: "boolean",
    description: "True if KERS is currently charging.",
  },
  {
    name: "kersCurrentKJ",
    type: "number",
    description: "Current KERS energy in KJ.",
  },
  {
    name: "kersHasButtonOverride",
    type: "boolean",
    description: "True if KERS has a button override.",
    notes: "Physics-only",
  },
  { name: "kersInput", type: "number", description: "KERS input value." },
  { name: "kersLoad", type: "number", description: "Current KERS load." },
  {
    name: "kersMaxKJ",
    type: "number",
    description: "Maximum KERS energy in KJ.",
  },
  {
    name: "kersPresent",
    type: "boolean",
    description: "True if KERS is present on the car.",
    notes: "Physics-only",
  },
  {
    name: "lapCount",
    type: "integer",
    description:
      "Number of completed laps in this session (within connection online), including spoiled laps.",
  },
  {
    name: "lapCutsCount",
    type: "integer",
    description: "Number of lap cuts in current lap.",
    notes: "Physics-only",
  },
  {
    name: "lapTimeMs",
    type: "integer",
    description: "Time of current lap in milliseconds.",
  },
  {
    name: "lastLapCutsCount",
    type: "integer",
    description: "Number of lap cuts in last lap.",
  },
  {
    name: "lastSplits",
    type: "integer[]",
    description:
      "Time for different splits of last lap, in milliseconds. Items start with 0.",
  },
  {
    name: "localAngularVelocity",
    type: "vec3",
    description: "Angular velocity in local space.",
  },
  {
    name: "localVelocity",
    type: "vec3",
    description: "Velocity in local space.",
  },
  {
    name: "look",
    type: "vec3",
    description: "Vector facing forward (normalized).",
  },
  {
    name: "lowBeams",
    type: "boolean",
    description:
      "true if low beams switch is currently active (doesn't depend on the state of headlights, just on the switch state).",
  },
  {
    name: "manualPitsSpeedLimiterEnabled",
    type: "boolean",
    description:
      "Returns true if manual pits speed limiter is currently active.",
    notes: "Physics-only",
  },
  { name: "mass", type: "number", description: "Car mass in kg." },
  {
    name: "maxFuel",
    type: "number",
    description: "Maximum amount of fuel in liters.",
  },
  {
    name: "maxRelativePlankWear",
    type: "number",
    description: "From 0 to 1. 0 if not available.",
    notes: "Physics-only",
  },
  {
    name: "mguhChargingBatteries",
    type: "boolean",
    description: "True if MGU-H is charging batteries.",
  },
  {
    name: "mgukDelivery",
    type: "integer",
    description: "MGU-K delivery mode. Starts with 0.",
  },
  {
    name: "mgukDeliveryCount",
    type: "integer",
    description: "Number of MGU-K delivery modes.",
  },
  {
    name: "mgukRecovery",
    type: "integer",
    description: "MGU-K recovery level from 0 to 10 (for 100%).",
  },
  {
    name: "minHeight",
    type: "number",
    description: "Minimum allowed ride height in meters.",
  },
  {
    name: "nodeIndex",
    type: "integer",
    description:
      "Car index if 0 is nearest to camera, 1 is second nearest and so on.",
  },
  { name: "oilPressure", type: "number", description: "Current oil pressure." },
  {
    name: "oilTemperature",
    type: "number",
    description: "Current oil temperature.",
  },
  {
    name: "p2pActivations",
    type: "integer",
    description: "Number of Push-to-Pass activations.",
  },
  { name: "p2pStatus", type: "integer", description: "Push-to-Pass status." },
  {
    name: "performanceMeter",
    type: "number",
    description: "Performance meter comparing this lap with best, seconds.",
  },
  {
    name: "performanceMeterSpeedDifferenceMs",
    type: "number",
    description:
      "In AC performance app, there is that red/green bar, it shows this value.",
  },
  {
    name: "physicsAvailable",
    type: "boolean",
    description:
      "Cars in replays, or remote cars online do not have regular physics component running, so some data will be missing.",
  },
  {
    name: "physicsToGraphicsTransform",
    type: "mat4x4",
    description:
      "Physics-to-graphics transform based on graphics offset and pitch rotation from car.ini",
  },
  {
    name: "ping",
    type: "integer",
    description: "Ping in ms (or -1 if not available).",
  },
  {
    name: "pitTransform",
    type: "mat4x4",
    description: "Transformation of pit position.",
  },
  {
    name: "position",
    type: "vec3",
    description:
      "Car position in the world (corresponds to 0 coordinate in its model space).",
  },
  {
    name: "poweredWheelsSpeed",
    type: "number",
    description:
      "Can be used for speedometers if they're not using GPS and instead use powered wheels, value in km/h.",
  },
  {
    name: "prefersImperialUnits",
    type: "boolean",
    description: "True for cars from UK or USA.",
  },
  {
    name: "previousLapTimeMs",
    type: "integer",
    description: "Time of last lap in milliseconds.",
  },
  {
    name: "previousSectorTime",
    type: "integer",
    description:
      "Time of previous split in milliseconds, or 0 if it's a first split.",
  },
  {
    name: "racePosition",
    type: "integer",
    description:
      "Position of a car in the race, 1 for first, 2 for second, etc.",
  },
  {
    name: "rawAmbientOcclusion",
    type: "number",
    description:
      "Ambient occlusion value computed from prebaked data from track's VAO patch. Not affected by WeatherFX adjustments.",
  },
  {
    name: "resetCounter",
    type: "integer",
    description: "Increases by 1 each time a car resets.",
  },
  { name: "restrictor", type: "number", description: "Restrictor value." },
  {
    name: "rideHeight",
    type: "number[]",
    description: "0 for front, 1 for rear. 2 items, starts with 0.",
  },
  { name: "rpm", type: "number", description: "Engine RPM." },
  {
    name: "rpmLimiter",
    type: "number",
    description: "RPM limiter threshold, if exists.",
  },
  {
    name: "rpmMinimum",
    type: "number",
    description: "Minimum RPM (or -1 if physics not available).",
  },
  {
    name: "sessionID",
    type: "integer",
    description:
      "Index of a car in an online race (differs from regular car index).",
  },
  {
    name: "sessionLapCount",
    type: "integer",
    description: "Laps completed in the current session.",
  },
  {
    name: "shakeMultiplier",
    type: "number",
    description: "SHAKE_MUL value from car.ini",
  },
  {
    name: "side",
    type: "vec3",
    description: "Vector facing sideways (normalized).",
  },
  {
    name: "sirenHorn",
    type: "boolean",
    description:
      "If set to true, horn is working in siren mode (press to toggle).",
  },
  { name: "speedKmh", type: "number", description: "Current speed in km/h." },
  {
    name: "speedLimiter",
    type: "number",
    description:
      "Returns pit limiter speed in km/h or 0 if no limit is currently active.",
    notes: "Physics-only",
  },
  {
    name: "speedLimiterInAction",
    type: "boolean",
    description: "Speed limiter is currently restricting speed.",
    notes: "Physics-only",
  },
  { name: "speedMs", type: "number", description: "Current speed in m/s." },
  {
    name: "splinePosition",
    type: "number",
    description:
      "Position of car along the track, 0 for starting line, 1 for finishing line.",
  },
  {
    name: "steer",
    type: "number",
    description: "Angle of steering wheel in degrees.",
  },
  {
    name: "steerLock",
    type: "number",
    description: "Maximum steering wheel angle in degrees.",
  },
  {
    name: "steerTorque",
    type: "number",
    description: "Current steering torque.",
  },
  {
    name: "timestamp",
    type: "number",
    description: "Time of last physics state record, in milliseconds.",
  },
  {
    name: "tractionControl2",
    type: "number",
    description: "Traction control 2 setting.",
  },
  {
    name: "tractionControl2Modes",
    type: "integer",
    description: "Number of modes for TC2.",
  },
  {
    name: "tractionControlInAction",
    type: "boolean",
    description: "TC is currently intervening.",
    notes: "Physics-only",
  },
  {
    name: "tractionControlMode",
    type: "integer",
    description: "0 for disabled TC.",
    notes: "Physics-only",
  },
  {
    name: "tractionControlModes",
    type: "integer",
    description: "0 if TC is not present.",
    notes: "Physics-only",
  },
  {
    name: "tractionType",
    type: "integer",
    description: "0 for rwd, 1 for fwd, 2 for awd, 3 for new awd, -1 for N/A.",
    notes: "Physics-only",
  },
  {
    name: "transform",
    type: "mat4x4",
    description:
      "Car physics transformation in world space (does not match body transformation).",
  },
  {
    name: "turboBoost",
    type: "number",
    description: "Turboboost value, from 0 and upwards.",
  },
  {
    name: "turboBoosts",
    type: "number[]",
    description: "Values per each turbo, up to 8. 8 items, starts with 0.",
    notes: "Physics-only",
  },
  {
    name: "turboCount",
    type: "integer",
    description: "Number of turbos.",
    notes: "Physics-only",
  },
  {
    name: "turboWastegates",
    type: "number[]",
    description: "Values per each turbo, up to 8. 8 items, starts with 0.",
    notes: "Physics-only",
  },
  {
    name: "turningLeftLights",
    type: "boolean",
    description: "True if left turn signal is on.",
  },
  {
    name: "turningLeftOnly",
    type: "boolean",
    description: "True if only left turn signal is on.",
  },
  {
    name: "turningLightsActivePhase",
    type: "boolean",
    description:
      "True if the turn signal is currently in the 'on' part of its blink cycle.",
  },
  {
    name: "turningRightLights",
    type: "boolean",
    description: "True if right turn signal is on.",
  },
  {
    name: "turningRightOnly",
    type: "boolean",
    description: "True if only right turn signal is on.",
  },
  {
    name: "up",
    type: "vec3",
    description: "Vector facing upwards (normalized).",
  },
  {
    name: "useInternalAudio",
    type: "boolean",
    description: "If true, …_int variants of audio events are used.",
  },
  {
    name: "userSpeedLimiterEnabled",
    type: "boolean",
    description:
      "Returns true if custom physics speed limiter is currently active.",
    notes: "Physics-only",
  },
  { name: "velocity", type: "vec3", description: "Car velocity in m/s." },
  {
    name: "visibleIndex",
    type: "integer",
    description:
      "Car index if 0 is nearest to camera and visible in main camera.",
  },
  {
    name: "waterTemperature",
    type: "number",
    description:
      "Approximation of water temperature in °C done by original AC.",
  },
  {
    name: "wheels",
    type: "ac.StateWheel[]",
    description: "4 items, starts with 0.",
  },
  {
    name: "wheelsOutside",
    type: "integer",
    description: "Number of wheels outside of allowed area.",
  },
  {
    name: "wiperMode",
    type: "integer",
    description:
      "Stores previous active mode when wipers are disabled, but still have a loop to complete.",
  },
  {
    name: "wiperModes",
    type: "integer",
    description: "Number of wiper modes, no less than 1.",
  },
  {
    name: "wiperProgress",
    type: "number",
    description: "Current progress of the wiper cycle.",
  },
  {
    name: "wiperSelectedMode",
    type: "integer",
    description: "Actual selected mode.",
  },
  {
    name: "wiperSpeed",
    type: "number",
    description: "Current speed of the wipers.",
  },
  {
    name: "worldToLocal",
    type: "mat4x4",
    description: "Inverse of car visual transformation.",
  },
  { name: "year", type: "integer", description: "Manufacturing year." },
].sort((a, b) => a.name.localeCompare(b.name));
