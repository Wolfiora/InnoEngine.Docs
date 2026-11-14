---
uid: api.9d1c02bf09af2e557759a8fa15b594c2976e4775d67d9dd7b1cdb7415d100565
symbol: "engine:Inno.Runtime:M:Inno.Runtime.RuntimeSubsystemPipeline.RenderFrame(Inno.Runtime.Contracts.RuntimeFrame,System.Action)"
source: xml
reviewed: d0bccdcde91019b2f4b9d39c3b64541896ca8c2721988ecbf909f89976755a8f
title: "RuntimeSubsystemPipeline.RenderFrame"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Opens output resources, accepts product requests and submits each owner's output once.

## Parameters

**Parameter `frame`:** The frame timing snapshot.

**Parameter `submit`:** Optional control-thread presentation code that submits requests while output is open.
