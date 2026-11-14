---
uid: api.023b074154c7b5d99d95bb379551494ff3141874418abb34f54af7a4b689d6bb
symbol: "engine:Inno.Build.Distribution.Standard:M:Inno.Build.Distribution.Standard.StandardBuildEnvironment.Capture(System.String,Inno.Build.BuildTargetId,System.String)"
source: xml
reviewed: 50aa19953c0edd7584c826f4ce2ebc061fdceddb77234d12eac888e81812cc0e
title: "StandardBuildEnvironment.Capture"
kind: api
owners: [Inno.Build.Distribution.Standard]
apiSurface: source-clr
---

Resolves the selected managed host and captures execution capabilities at the composition boundary.

**Parameter `applicationDirectory`:** The product or tool's installed location used for source provisioning.

**Parameter `toolsTarget`:** The native target explicitly selected for executable build tools, independently of exported games.

**Parameter `dotnetHost`:** An explicit SDK executable, or null to use DOTNET\_HOST\_PATH, the loaded shared runtime's muxer, then normal executable discovery when this process has no shared runtime installation.

**Returns:** A frozen execution context; publication targets must be selected independently.

**Exception `T:System.PlatformNotSupportedException`:** The distribution has no build execution integration for this system or processor.

**Exception `T:System.IO.FileNotFoundException`:** The selected managed SDK host cannot be located.
