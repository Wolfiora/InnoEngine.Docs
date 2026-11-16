---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82ac3b1290fbd2545c3949ba631580a0bf2e876b81688fa95e595939d105483d
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PushOverlay(Inno.Core.Layers.Layer)
title: LayerStack.PushOverlay
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: ab890270df94d8d0401822b3672ddbc5483f5e4d9f2214b89523599a0d1086de
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `overlay`:** The overlay to attach.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the same instance is already attached or the event hub factory returns `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
