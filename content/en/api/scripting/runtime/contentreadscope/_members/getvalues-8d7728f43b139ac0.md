---
uid: api.8d7728f43b139ac0c0cc47eeb0c51035e766fc54f544f366d89a89828078ef95
symbol: "scripting:Inno.References:M:InnoEngine.References.ContentReadScope.GetValues\u0060\u00601"
source: xml
reviewed: 78130e1aa6003a49d212085d3dcdf0611cb39ae55f77b5f8adb6aeaf9cb42167
title: "GetValues"
kind: api
owners: [Inno.References]
apiSurface: editor-script
apiScope: Runtime
---

Resolves all live roots matching the requested content contract.

**Type parameter `TValue`:** The identity-backed content type understood by the consumer.

**Returns:** A read-only operation snapshot; stale or incompatible roots are omitted.

**Exception `T:System.ObjectDisposedException`:** The operation scope has ended.

**Exception `T:System.InvalidOperationException`:** Lookup occurs off the owning control thread.
