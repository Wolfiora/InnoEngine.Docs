---
uid: api.a470d56f32dd0e39302d2774368a819d680822e9284b8a52b21374d05fa96f8d
symbol: "engine:Inno.Audio.Runtime:M:Inno.Audio.Runtime.AudioRuntime.Update(System.Single)"
source: xml
reviewed: dcd7bec74d076b3a2593de78a9364f3500f2c26b337824ba888581f5491c7e44
title: "Update"
kind: api
owners: [Inno.Audio.Runtime]
apiSurface: source-clr
---

Advances providers, pending preparation, backend maintenance, and completion dispatch at a main-thread safety point.

**Parameter `deltaTime`:** Non-negative elapsed frame time in seconds.

**Exception `T:System.ArgumentOutOfRangeException`:** The elapsed time is negative or non-finite.
