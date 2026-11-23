---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b960e606d0be40530a5f841173c06caec62363a95d8dedc3d5168da0150daeb9
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackRequirements.#ctor(Inno.Build.BuildTargetID,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyList{System.String})
title: PlayerSupportPackRequirements.Constructor
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 04731d7e2d38fb1e881cdea825e9552a82b2d7150243231b9897e80c94c015b3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The stable target whose inputs are being validated.

**Parameter `requiredFiles`:** Portable Pack-relative files required by the selected managed and binding graph.

**Parameter `nativeRoot`:** The Pack-relative root containing the selected runtime libraries or static archives.

**Parameter `nativeDirectories`:** Native-root-relative deployment groups, each requiring at least one selected library.

**Parameter `nativeExtension`:** The explicit SDK library suffix; it is not inferred from this process.

**Parameter `nativeFiles`:** The exact native-root-relative library set, or null when deployment metadata validates filenames.

## Exceptions

**Exception `T:System.ArgumentException`:** A target, extension or portable relative path is invalid or repeated.

**Exception `T:System.ArgumentNullException`:** A required collection is null.
