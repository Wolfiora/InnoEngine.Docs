---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.37dbbc4eca34e599b2dfa952c3beab7c9d45f69e83aea34e8224408ce46b32ed
symbol: engine:Inno.Core.Layers:M:Inno.Core.Layers.LayerStack.OnUpdate(System.Single)
title: LayerStack.OnUpdate
kind: api
owners:
- Inno.Core.Layers
apiSurface: source-clr
reviewed: 7bcccd0cf0d6e398acff44a4de741facd3fb0ad75347146d3ac024a1f691d6f6

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Advances variable-step callbacks in bottom-to-top stack order.

## Parameters

**Parameter `deltaTime`:** The elapsed frame time in seconds.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** Thrown when this stack has been disposed.
