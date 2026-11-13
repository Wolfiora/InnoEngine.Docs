---
uid: api.d53d35f7d15130a6ae73e7e28b2808816b35fbb82964d97dbe66594178b64194
symbol: "engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackRequirements.#ctor(Inno.Build.BuildTargetId,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyList{System.String})"
source: xml
reviewed: 6a5db9362cb5905852ae2e3c09e1b095d594cd45da3667128bdf05fb1512c3d1
title: "Constructor"
kind: api
owners: [Inno.Build.SupportPacks.Core]
apiSurface: source-clr
---

Captures the exact publication inputs and native groups supplied by the selected product closure.

**Parameter `target`:** The stable target whose inputs are being validated.

**Parameter `requiredFiles`:** Portable Pack-relative files required by the selected managed and binding graph.

**Parameter `nativeRoot`:** The Pack-relative root containing the selected runtime libraries or static archives.

**Parameter `nativeDirectories`:** Native-root-relative deployment groups, each requiring at least one selected library.

**Parameter `nativeExtension`:** The explicit SDK library suffix; it is not inferred from this process.

**Parameter `nativeFiles`:** The exact native-root-relative library set, or null when deployment metadata validates filenames.

**Exception `T:System.ArgumentException`:** A target, extension or portable relative path is invalid or repeated.

**Exception `T:System.ArgumentNullException`:** A required collection is null.
