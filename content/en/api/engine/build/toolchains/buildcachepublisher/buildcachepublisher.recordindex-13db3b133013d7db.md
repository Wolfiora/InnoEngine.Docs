---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.13db3b133013d7dbca35f94c3c6c22169c60690b044788d8fbd026c09682db76
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.RecordIndex(System.String,System.Collections.Generic.IReadOnlyList{System.String})
title: BuildCachePublisher.RecordIndex
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 321c325439482cf1fceec96050de245cfa97387cdea9ba6c589d98c22e649473

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `path`:** The producer-owned index file within this publisher root.

**Parameter `dependencies`:** Exact publication roots; missing dependencies make the index retireable.

## Remarks

The caller must hold this publisher's shared activity gate through the index write and registration.
