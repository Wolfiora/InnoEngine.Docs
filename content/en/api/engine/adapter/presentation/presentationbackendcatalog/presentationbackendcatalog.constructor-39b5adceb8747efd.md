---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.39b5adceb8747efde1780ee3d179d1a326ce4d1ec1339ffc667ec4a1700d6af8
symbol: engine:Inno.Adapter.Presentation:M:Inno.Adapter.Presentation.PresentationBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Presentation.PresentationBackendProvider})
title: PresentationBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Presentation
apiSurface: source-clr
sourceFingerprint: bd9efdeb4942b4a795ac09b80bbb9c35b875f65f845ddbe46ee8a8f7615697fd
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
