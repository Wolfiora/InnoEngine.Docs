---
uid: api.4253904e24ffd9de946fb8e9df006296a06ca01c4a4123233e18ea117e0f7ec9
symbol: "engine:Inno.Build:M:Inno.Build.BuildSettings.CreateDefault(System.String,System.String,Inno.Build.BuildTargetId)"
source: xml
reviewed: d456f914ebe1fd3166e04b4ac574f16af330ebd87357e723256dc984f3ca03da
title: "CreateDefault"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates canonical defaults for a new project.

**Parameter `projectName`:** The project directory name used for initial labels and output paths.

**Parameter `startupScene`:** The initial mount-qualified startup Scene, or an empty value when unavailable.

**Parameter `target`:** The host-appropriate initial build target.

**Returns:** A newly owned build settings object.

**Exception `T:System.ArgumentException`:** Thrown when `projectName` is empty or `target` is invalid.
