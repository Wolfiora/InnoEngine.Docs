---
title: "ToolchainEnvironment"
description: "Reference for ToolchainEnvironment in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.3e941fdf4073c5a8
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `ToolchainEnvironment`

This reference describes `ToolchainEnvironment` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`CaptureOutputAsync`](#api-3fc44030720b01bf) | Method |
| [`CaptureOutputAsync`](#api-a713392c17f65232) | Method |
| [`ContainsAny`](#api-1342be0c77bf9da7) | Method |
| [`DeleteDirectory`](#api-e19bc5baf132b807) | Method |
| [`FindRepoRoot`](#api-0704cd6c4de3c4b8) | Method |
| [`NormalizeOutputName`](#api-f173755eec60b05a) | Method |
| [`ResolveExecutable`](#api-96e497cfe57adc8a) | Method |
| [`RunAsync`](#api-14a0399a49429c03) | Method |
| [`RunAsync`](#api-f843ba2bed39afbd) | Method |
| [`RunAsync`](#api-175382dd51180daf) | Method |
| [`RunAsync`](#api-ecae002fd81df830) | Method |
| [`RunAsync`](#api-44174d271e635de3) | Method |
| [`RunAsync`](#api-b1b662606740d94e) | Method |
| [`TrimConfigSuffix`](#api-404cc098f7acc59b) | Method |
| [`ValidateConfiguration`](#api-92fd7ade6ebdd6cb) | Method |

## Type declaration

<a id="api-3e941fdf4073c5a8"></a>
<!-- api: T:Inno.Build.Toolchains.ToolchainEnvironment a04160a9bc078e59c535fd6b299398ca603bef254b79026bb9dadf7f0b992662 -->

```csharp
public static class Inno.Build.Toolchains.ToolchainEnvironment
```

Provides deterministic host-process and workspace operations shared by native dependency toolchains.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L15).

## `CaptureOutputAsync`

<a id="api-3fc44030720b01bf"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.Diagnostics.ProcessStartInfo,System.Threading.CancellationToken) 8bafd774d064350d0837f1bae30fece635c91539bb9495e09230e502d16ffefa -->

```csharp
public static System.Threading.Tasks.Task<string> Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.Diagnostics.ProcessStartInfo start, System.Threading.CancellationToken cancellationToken)
```

Captures platform tool discovery through the same cancellable process lifecycle as builds.

**Parameter `start`:** The prepared discovery command, including any platform-specific argument quoting.

**Parameter `cancellationToken`:** Cancels discovery and waits for its process tree to exit.

**Returns:** Complete standard output after successful discovery; errors and cancellation propagate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L519).

## `CaptureOutputAsync`

<a id="api-a713392c17f65232"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 18ae6022cc507aca016f8919cb0f6a94ca6211ea41c3a466150a4a6c1824a851 -->

```csharp
public static System.Threading.Tasks.Task<string> Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(string fileName, System.Collections.Generic.IReadOnlyList<string> arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken, System.Collections.Generic.IReadOnlyDictionary<string, string?>? environment = null)
```

Captures a tool's standard output while forwarding errors and preserving the common process lifecycle.

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** Structured arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The directory used for project and SDK resolution.

**Parameter `cancellationToken`:** Cancels the child process tree and waits for its complete exit.

**Parameter `environment`:** Optional child-only environment variables. Null values remove inherited variables;
empty values remain explicitly empty.

**Returns:** The complete standard output after successful exit. Unsuccessful exits retain captured output in the exception.

**Throws `System.InvalidOperationException`:** The tool fails to start or exits unsuccessfully.

**Throws `System.OperationCanceledException`:** The operation was canceled.

**Throws `System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L309).

## `ContainsAny`

<a id="api-1342be0c77bf9da7"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.ContainsAny(System.String,System.String[]) 40e89914599d13fadbd1ad795a1b7f93c42a1ac6cbcd38aac6dc942258e923b4 -->

```csharp
public static bool Inno.Build.Toolchains.ToolchainEnvironment.ContainsAny(string value, params string[] needles)
```

Determines whether a value contains at least one token without regard to casing.

**Parameter `value`:** The value searched for candidate tokens.

**Parameter `needles`:** The candidate tokens tested against the value.

**Returns:** `true` when at least one token occurs in the value; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L424).

## `DeleteDirectory`

<a id="api-e19bc5baf132b807"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.DeleteDirectory(System.String) bfca79bada48489ab50d3b037641dd1b5d5825b60e5f432393eb82fabe44727b -->

```csharp
public static void Inno.Build.Toolchains.ToolchainEnvironment.DeleteDirectory(string path)
```

Deletes one explicitly resolved toolchain output directory when it exists.

**Parameter `path`:** The exact directory selected by a toolchain command.

**Throws `System.ArgumentException`:** Thrown when `path` is empty or does not resolve to an absolute path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L493).

## `FindRepoRoot`

<a id="api-0704cd6c4de3c4b8"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.FindRepoRoot 53fc23941ad11cef820c831b5f8c4d250db78a94dbe675b713c4f91a6c2067ae -->

```csharp
public static string Inno.Build.Toolchains.ToolchainEnvironment.FindRepoRoot()
```

Resolves the repository containing the currently executing toolchain assembly.

**Returns:** The absolute path of the repository root.

**Throws `System.InvalidOperationException`:** Thrown when no repository marker exists above the toolchain assembly directory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L352).

## `NormalizeOutputName`

<a id="api-f173755eec60b05a"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.NormalizeOutputName(System.String,System.String) deac2477695bd1d420a90b69c7e3a14098f0c8766908b0b1e389ddde69647f70 -->

```csharp
public static string Inno.Build.Toolchains.ToolchainEnvironment.NormalizeOutputName(string fileName, string config)
```

Normalizes a native artifact name and appends its build configuration.

**Parameter `fileName`:** The source artifact file name.

**Parameter `config`:** The normalized configuration appended to the artifact stem.

**Returns:** The deterministic output file name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L451).

## `ResolveExecutable`

<a id="api-96e497cfe57adc8a"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.ResolveExecutable(System.String) 164eb9a2d9c8a8dfeb213357600b17f058436df00dbb7485636c36063e7882e7 -->

```csharp
public static string Inno.Build.Toolchains.ToolchainEnvironment.ResolveExecutable(string name)
```

Resolves one explicitly selected executable before it becomes a build input.

**Parameter `name`:** An executable path or a command name available on the current process PATH.

**Returns:** The absolute executable path used for process execution and artifact identity.

**Throws `System.ArgumentException`:** The name is empty.

**Throws `System.IO.FileNotFoundException`:** The executable is unavailable at the supplied path or on PATH.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L164).

## `RunAsync`

<a id="api-14a0399a49429c03"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) f9d69559827ff81b3d335b937fcb7bbb771525f9529eac6212f2259ee139eed5 -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext context, string fileName, System.Collections.Generic.IReadOnlyList<string> arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken, System.Collections.Generic.IReadOnlyDictionary<string, string> environment)
```

Executes a declared absolute tool with an explicitly resolved SDK environment and records the operation cost.

**Parameter `context`:** The operation owning execution statistics and frozen recipe inputs.

**Parameter `fileName`:** The absolute executable declared by the recipe; no host-native SDK is inferred.

**Parameter `arguments`:** Individual arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The owned source or intermediate directory.

**Parameter `cancellationToken`:** Cancels execution and drains the complete process tree.

**Parameter `environment`:** The frozen environment supplied by the selected SDK resolver.

**Returns:** Completion after successful exit and output delivery.

**Throws `System.ArgumentException`:** The executable is not an absolute declared tool path.

**Throws `System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Throws `System.OperationCanceledException`:** Execution was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L50).

## `RunAsync`

<a id="api-f843ba2bed39afbd"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken) 29be57b72ec50fe1d04be6a0ff490eda58340964724f0985e29b460509e46f07 -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext context, string fileName, System.Collections.Generic.IReadOnlyList<string> arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken)
```

Runs a host-native process with the context's frozen compiler and SDK selection.

**Parameter `context`:** A context resolved by NativeToolchainSelection before artifact fingerprinting.

**Parameter `fileName`:** A selected build command or an absolute executable declared as a component input.

**Parameter `arguments`:** Individual arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The source snapshot or intermediate directory owned by the operation.

**Parameter `cancellationToken`:** Cancels and retires the complete process tree.

**Returns:** Completion after successful exit and complete output delivery.

**Throws `System.InvalidOperationException`:** Host tools were not resolved, a command is unavailable or a process fails.

**Throws `System.OperationCanceledException`:** The operation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L93).

## `RunAsync`

<a id="api-175382dd51180daf"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext,System.String,System.String,System.String,System.Threading.CancellationToken) 5262df6e7c1594690ba98960855b2c1a23e1eeb8be81fa1dcca6cb2d30e0425a -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(Inno.Build.Toolchains.NativeBuildContext context, string fileName, string arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken)
```

Runs a quoted host command with a frozen compiler and SDK environment.

**Parameter `context`:** The context resolved before artifact fingerprinting.

**Parameter `fileName`:** A selected command or an absolute executable declared in the component inputs.

**Parameter `arguments`:** Arguments quoted for the selected executable's command-line parser.

**Parameter `workingDirectory`:** The operation's source snapshot or intermediate directory.

**Parameter `cancellationToken`:** Cancels and retires the complete process tree.

**Returns:** Completion after the command exits successfully and its streams drain.

**Throws `System.InvalidOperationException`:** Tools are unresolved or execution fails.

**Throws `System.OperationCanceledException`:** The operation was canceled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L134).

## `RunAsync`

<a id="api-ecae002fd81df830"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.IO.TextWriter,System.IO.TextWriter) e42b55c993d36b261b87d5f9c42e1935fee862ed038080bfc3d452d5777e412a -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(string fileName, System.Collections.Generic.IReadOnlyList<string> arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken, System.Collections.Generic.IReadOnlyDictionary<string, string?>? environment, System.IO.TextWriter standardOutput, System.IO.TextWriter standardError)
```

Runs a child build with caller-owned output destinations and the shared process retirement protocol.

**Parameter `fileName`:** The executable selected by the build composition.

**Parameter `arguments`:** Structured arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The project directory controlling SDK and workload resolution.

**Parameter `cancellationToken`:** Cancels the complete process tree and drains both output streams.

**Parameter `environment`:** Optional child-only toolchain variables. Null values remove inherited variables;
empty values remain explicitly empty.

**Parameter `standardOutput`:** The caller-owned standard output destination; the runner does not dispose it.

**Parameter `standardError`:** The caller-owned standard error destination; the runner does not dispose it.

**Returns:** Completion after successful exit and complete output delivery; failures propagate.

**Throws `System.InvalidOperationException`:** The executable cannot start or exits unsuccessfully.

**Throws `System.IO.IOException`:** An output destination fails; the owned process tree is terminated before failure returns.

**Throws `System.OperationCanceledException`:** The operation was canceled after retiring its owned process tree.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L261).

## `RunAsync`

<a id="api-44174d271e635de3"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) f17539ee64eb1f4799a1f0b0dad6dcb6b3615ee705c52aa863c29170aedd5e1b -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(string fileName, System.Collections.Generic.IReadOnlyList<string> arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken, System.Collections.Generic.IReadOnlyDictionary<string, string?>? environment = null)
```

Runs a child build with structured arguments, cancellation and hidden windows.

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** The individual arguments, passed without shell interpretation.

**Parameter `workingDirectory`:** The repository or staging directory owned by the operation.

**Parameter `cancellationToken`:** Cancels the child process and its complete process tree.

**Parameter `environment`:** Optional process-local toolchain variables; the parent environment is unchanged.
Null values remove inherited variables, while empty values remain explicitly empty.

**Returns:** Completion after both output streams have drained and the process succeeds.

**Throws `System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Throws `System.OperationCanceledException`:** The operation was canceled.

**Throws `System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L216).

## `RunAsync`

<a id="api-b1b662606740d94e"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.String,System.String,System.Threading.CancellationToken) 1654d515f75d5986eadd4ef670433c475fc8042ca42dc5d9464378230fbf3423 -->

```csharp
public static System.Threading.Tasks.Task Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(string fileName, string arguments, string workingDirectory, System.Threading.CancellationToken cancellationToken)
```

Runs a child build using a complete argument string, without a shell.

**Parameter `fileName`:** The executable resolved by the host operating system.

**Parameter `arguments`:** Arguments quoted for the selected executable's command-line parser.

**Parameter `workingDirectory`:** The directory owned by the operation.

**Parameter `cancellationToken`:** Cancels the complete process tree and waits for output to finish draining.

**Returns:** Completion after successful exit; failures and cancellation propagate.

**Throws `System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Throws `System.OperationCanceledException`:** The operation was canceled.

**Throws `System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L397).

## `TrimConfigSuffix`

<a id="api-404cc098f7acc59b"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.TrimConfigSuffix(System.String) 4f4ffe3387b20c961a433500bb6766ca9a7b571891a9fe51a325dc9d504e77e9 -->

```csharp
public static string Inno.Build.Toolchains.ToolchainEnvironment.TrimConfigSuffix(string baseName)
```

Removes a trailing native debug or release token from an artifact stem.

**Parameter `baseName`:** The artifact stem to normalize.

**Returns:** The normalized artifact stem without a configuration suffix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L470).

## `ValidateConfiguration`

<a id="api-92fd7ade6ebdd6cb"></a>
<!-- api: M:Inno.Build.Toolchains.ToolchainEnvironment.ValidateConfiguration(System.String) f2d2b4a9191aebae073595171ae114f9c51b87b7ef4dff2f0c3a2d28c0398adc -->

```csharp
public static void Inno.Build.Toolchains.ToolchainEnvironment.ValidateConfiguration(string configuration)
```

Validates the configuration shared by all native component builds.

**Parameter `configuration`:** The debug or release token supplied by the build workflow.

**Throws `System.ArgumentException`:** The configuration is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/ToolchainEnvironment.cs#L337).
