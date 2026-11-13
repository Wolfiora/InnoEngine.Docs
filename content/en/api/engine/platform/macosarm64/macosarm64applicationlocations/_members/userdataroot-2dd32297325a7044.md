---
uid: api.2dd32297325a704479c3cdf3798c480462122f20c1c0c6088eddd2f1963aadaa
symbol: "engine:Inno.Platform.MacOSArm64:P:Inno.Platform.MacOSArm64.MacOSArm64ApplicationLocations.userDataRoot"
source: xml
reviewed: 1f80bcdff81692e43da16847723e0c83a4f231cba823105b57a535d6ffbbba08
title: "userDataRoot"
kind: api
owners: [Inno.Platform.MacOSArm64]
apiSurface: source-clr
---

Gets the current user's application data root according to MacOS system conventions.

**Exception `T:System.PlatformNotSupportedException`:** The application is running on another operating system.

**Exception `T:System.InvalidOperationException`:** The system did not provide a usable user location.
