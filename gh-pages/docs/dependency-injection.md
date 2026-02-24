# Dependency Injection

## Service Registration Methods

| Method<br />(specify `LIFETIME`, `SERVICE`, `IMPLEMENTATION`)  | Automatic<br />Object<br />Disposal | Multiple<br />Implementations | Pass<br />Arguments |
| :---                                                |           :---:           |          :---:           |     :---:      |
| `services.AddSingleton<IMyDep, MyDep>()`;           | Yes | Yes | No  |
| `services.AddSingleton<IMyDep>(sp => new MyDep());` | Yes | Yes | Yes |
| `services.AddSingleton<MyDep>();`                   | Yes | No  | No  |
| `services.AddSingleton<IMyDep>(new MyDep());`       | No  | Yes | Yes |
| `services.AddSingleton(new MyDep());`               | No  | No  | Yes |
  
  Source: [Dependency injection in .NET](https://docs.microsoft.com/en-us/dotnet/core/extensions/dependency-injection#service-registration-methods)
  
## Simple Injection in ASP.NET Core

Install these NuGet Packages:

* SimpleInjector *(optional - recommended by Simple Injector for the newest, latest release)*
* SimpleInjector.Integration.AspNetCore *(optional if SimpleInjector.Integration.AspNetCore.Mvc.Core installed)*
* SimpleInjector.Integration.AspNetCore.Mvc
* SimpleInjector.Integration.AspNetCore.Mvc.Core
* SimpleInjector.Integration.AspNetCore.Mvc.ViewFeatures *(needed for AddViewComponentActivation() extension method)*

```csharp
using SimpleInjector;

var container = new Container();

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

services.AddControllersWithViews();

services.AddSimpleInjector(container, options =>
{
   options.AddAspNetCore()
      .AddControllerActivation()
      .AddViewComponentActivation()
      .AddPageModelActivation()
      .AddTagHelperActivation();
   options.AutoCrossWireFrameworkComponents = false;  // default is true
   options.CrossWire<ILogger<HomeController>>();
   options.CrossWire<IMyApplicationService>();
});

container.Register<IDemoService, DemoService>(Lifestyle.Singleton);
services.AddSingleton<IDemoService, CoreDemoService>();  // No error if already registered in Simple Injector
// SimpleInjector will inject SimpleInjector instance if it exists
// Otherwise SimpleInjector will inject the instance from IServiceCollection
// (only if AutoCrossWireFrameworkComponents == true or specified with CrossFire)

var app = builder.Build();

app.Services.UseSimpleInjector(container);

container.Verify();

app.Run();
```
