---
uid: api.c45a7a3641fa6e80ca54ff3161b6c8faf9d9a96631fd1f9ca3c1c08ebc59e9f5
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.Assets.TryLoad\u0060\u00601(InnoEngine.Assets.AssetPath,\u0060\u00600@)"
source: xml
reviewed: afa6ebb61accae32ed0f9272dd84b64293d7ed596b53aad12fedcb2b82280643
title: "TryLoad"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Tries to load the canonical asset at a logical catalog path in the current session.

**Type parameter `TAsset`:** The required asset contract.

**Parameter `path`:** The mount-qualified logical catalog path.

**Parameter `asset`:** Receives the canonical compatible asset when available.

**Returns:** `true` when the current lookup contains a compatible asset; otherwise, `false`.

**Exception `T:System.InvalidOperationException`:** Thrown when no asset lookup is active for the caller.
