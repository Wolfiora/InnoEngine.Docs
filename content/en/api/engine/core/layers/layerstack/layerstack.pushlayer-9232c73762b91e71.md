---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9232c73762b91e71bfdb7c7b5f155e3f82c24eb9431efe2d2ac556d5b1ae2a50
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.PushLayer(Inno.Core.Layers.Layer)
title: LayerStack.PushLayer
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
sourceFingerprint: 4f395d9fc650508dcd3bffa3de684bd5ecbcc9c846e09c8e4f036196c6380732
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `layer`:** The layer to attach.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `layer` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the same instance is already attached or the event hub factory returns `null`.

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
