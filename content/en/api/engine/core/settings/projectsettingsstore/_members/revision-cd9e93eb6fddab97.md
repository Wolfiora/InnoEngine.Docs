---
uid: api.cd9e93eb6fddab976476ea48c87124494187deabf481b7681655f5fd79a6c3d1
symbol: "engine:Inno.Core.Settings:P:Inno.Core.Settings.ProjectSettingsStore.revision"
source: xml
reviewed: be1ee0f521fe391dd0b1b5c0b168fd25acfc926a8f047494793caffe64554aa0
title: "revision"
kind: api
owners: [Inno.Core.Settings]
apiSurface: source-clr
---

Gets the revision of the active effective settings snapshot. Runtime extensions may compare this value without registering reload-unsafe static delegates.

## Remarks

Pair this value with ownerId. Successful updates advance the revision; a failed generation transaction restores the previous revision with its effective values. Candidate revisions are not durable identities.
