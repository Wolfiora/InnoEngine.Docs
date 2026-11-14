---
uid: api.31eba40c3a20f47809ec64b35a2990e49b417d424be4e200472a9ca1458a6dfb
symbol: "engine:Inno.Rendering.Assets.Authoring:M:Inno.Rendering.Assets.Authoring.ShaderGraphSourceStore.Read(Inno.Assets.AssetPath)"
source: xml
reviewed: 2324446d79d687bbc0f97121a902536d83edce4fe5b35bc6eebfc9b4d499dbd1
title: "ShaderGraphSourceStore.Read"
kind: api
owners: [Inno.Rendering.Assets.Authoring]
apiSurface: source-clr
---

Reads source directly, so a broken graph remains editable even when import has no successful artifact.

**Parameter `path`:** Exact graph path within an active asset mount.

**Returns:** A detached native source snapshot with its conflict-detection fingerprint.
