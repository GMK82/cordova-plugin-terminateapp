#import "TerminateApp.h"

@implementation TerminateApp

- (void)terminateApp:(CDVInvokedUrlCommand *)command {
  exit(0);
}

@end