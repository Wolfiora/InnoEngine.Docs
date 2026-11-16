---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.82ac3b1290fbd2545c3949ba631580a0bf2e876b81688fa95e595939d105483d
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PushOverlay(Inno.Core.Layers.Layer)
title: LayerStack.PushOverlay
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 6615a318f82df2e2c2a73f0f282d44ce97f0ef712db9d784f20d1bb66c84e65a
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
