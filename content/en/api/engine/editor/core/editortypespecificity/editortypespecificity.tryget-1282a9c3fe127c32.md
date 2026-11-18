---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1282a9c3fe127c32b4c11da5ea80bada74b8de40a7ffd9e03745caa51d5716b9
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorTypeSpecificity.TryGet(System.Type,System.Type,System.Int32@)
title: EditorTypeSpecificity.TryGet
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 106febfb43c7c0cb4b354ab31a18c08a7e8f8fa50ee188ce507a0f1ddd2621fe
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `concreteType`:** The target type supplied by the active extension generation.

**Parameter `candidateType`:** The registered class or interface accepted by the extension.

**Parameter `distance`:** Zero for an exact match, ancestry distance for classes, or one for an interface.

## Returns

True when the registration accepts the target; otherwise false and the maximum distance.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Either type is null.
