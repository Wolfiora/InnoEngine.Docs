---
uid: api.38ccf8320c9ba429fab9004fbd267d76e03cdd3dee320de88078bb06feaaa2a2
symbol: "engine:Inno.Build.Composition:M:Inno.Build.Composition.BuildCompositionContext.#ctor(System.String,System.String,Inno.Build.Toolchains.BuildHostDescriptor,Inno.Build.BuildTargetId)"
source: xml
reviewed: d68206435a634952c72e1762e695879a5321ac905978a52b4bd98896ce1597ac
title: "BuildCompositionContext.Constructor"
kind: api
owners: [Inno.Build.Composition]
apiSurface: source-clr
---

Captures the host dependencies used by deployment and Support Pack preparation.

**Parameter `dotnetHost`:** The SDK executable selected by the host, either an executable path or a command name.

**Parameter `applicationDirectory`:** The absolute directory from which source-based Support Pack provisioning can be resolved.

**Parameter `host`:** The explicitly declared tool execution machine, independent of any publication target.

**Parameter `toolsTarget`:** The explicit native target of tools executed by this composition, independent of game publication.

**Exception `T:System.ArgumentException`:** The SDK command is blank or the application directory is not absolute.
