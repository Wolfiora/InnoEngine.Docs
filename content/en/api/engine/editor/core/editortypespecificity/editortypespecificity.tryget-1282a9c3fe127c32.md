---
uid: api.1282a9c3fe127c32b4c11da5ea80bada74b8de40a7ffd9e03745caa51d5716b9
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorTypeSpecificity.TryGet(System.Type,System.Type,System.Int32@)"
source: xml
reviewed: a46650f8086e671dafe3682355363f39b64ed7d4c61424c425f85109794f6743
title: "EditorTypeSpecificity.TryGet"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Determines whether a registration accepts a concrete target and returns its specificity distance.

**Parameter `concreteType`:** The target type supplied by the active extension generation.

**Parameter `candidateType`:** The registered class or interface accepted by the extension.

**Parameter `distance`:** Zero for an exact match, ancestry distance for classes, or one for an interface.

**Returns:** True when the registration accepts the target; otherwise false and the maximum distance.

**Exception `T:System.ArgumentNullException`:** Either type is null.
