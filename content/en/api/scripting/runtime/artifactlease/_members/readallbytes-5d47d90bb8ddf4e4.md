---
uid: api.5d47d90bb8ddf4e449ad88a1a552e86d9587d3886cf7742eac72542778b3e81e
symbol: "scripting:Inno.Assets:M:InnoEngine.Assets.ArtifactLease.ReadAllBytes"
source: xml
reviewed: b24f8b355ac7cd97918be213d08d409519cc9068d3e488e54774dd6a3cb7292e
title: "ReadAllBytes"
kind: api
owners: [Inno.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Reads one indexed payload through this lease's independently pinned stream.

**Returns:** Newly owned bytes with the exact indexed length; oversized or truncated payloads fail explicitly.

**Exception `T:System.IO.InvalidDataException`:** The payload exceeds the supported array size or does not have its indexed length.
