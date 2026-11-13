---
uid: api.2f20e44bedc7334e90a934f526bf93ea2b91dbc1aa066266ef0ff19a342544c8
symbol: "engine:Inno.Platform.WindowsX64:P:Inno.Platform.WindowsX64.WindowsX64ApplicationLocations.userDataRoot"
source: xml
reviewed: 9d8da17ef59b485db1ad87c720554be5ab76c3527379f044fd9839574f3cc4c9
title: "userDataRoot"
kind: api
owners: [Inno.Platform.WindowsX64]
apiSurface: source-clr
---

Gets the current user's application data root according to Windows system conventions.

**Exception `T:System.PlatformNotSupportedException`:** The application is running on another operating system.

**Exception `T:System.InvalidOperationException`:** The system did not provide a usable user location.
