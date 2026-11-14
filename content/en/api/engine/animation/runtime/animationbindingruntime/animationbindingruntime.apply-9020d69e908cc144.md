---
uid: api.9020d69e908cc144fe7496ae2b44a0bc52bc15296e9d546d7aee3d940911eb43
symbol: "engine:Inno.Animation.Runtime:M:Inno.Animation.Runtime.AnimationBindingRuntime.Apply(System.ReadOnlySpan{Inno.Animation.AnimationSample})"
source: xml
reviewed: 9a14cf7ad62a3e0a2a7b0cb3481144b181b8e16f81f9bbce9cd84de730708e42
title: "AnimationBindingRuntime.Apply"
kind: api
owners: [Inno.Animation.Runtime]
apiSurface: source-clr
---

Applies a frame batch using the currently committed binding generation.

## Parameters

**Parameter `samples`:** Final samples, independently blended by destination and binding.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** This binding owner has retired.

**Exception `T:System.InvalidOperationException`:** Called outside the owner thread.
