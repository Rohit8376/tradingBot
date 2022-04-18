import { Application, Request, Response } from "express";
import { User } from "../../../models/user.model";
import { BaseController } from "../../BaseController";
import { Messages } from "../../../constants/message";
import bcrypt from "bcrypt";
import { AuthHelper } from "../../../helpers/AuthHelpers";

export class TBUserController extends BaseController {
  constructor() {
    super();
    this.initialRoutes();
  }
  /**
   * Mounting express router to the app, to use routes on /api/user
   * @param app - Express Instance
   */
  public register(app: Application): void {
    app.use("/", this.router);
  }
  private initialRoutes() {
    this.router.get("/", this.home);
    this.router.post("/create-account", this.createAccount);
    this.router.post("/create-session", this.createSession);
    this.router.get("/get-profile", AuthHelper.guard, this.getProfile);
  }

  public async home(req: Request, res: Response): Promise<any> {
    res.status(201).json({
      message: "Home page",
    });
  }
  //user sign up
  public async createAccount(req: Request, res: Response): Promise<any> {
    try {
      const { first_name, last_name, email, contact_number, password, gender } =
        req.body;
      const isUser = await User.findOne({ contact_number });
      if (isUser)
        return res.status(401).json({
          message: Messages.USER_EXISTS,
        });
      const newUser = await User.create({
        first_name,
        last_name,
        email,
        password: await bcrypt.hash(password, 10),
        contact_number,
        gender,
      });
      res.status(201).json({
        message: Messages.SUCCESS_RECEIVED,
        user: {
          first_name,
          last_name,
          email,

          contact_number,
          gender,
        },
      });
    } catch (error: any) {
      res.status(501).json({
        message: Messages.SOMETHING_BAD,
        errorMessage: error.message,
      });
    }
  }

  //user sign
  public async createSession(req: Request, res: Response) {
    try {
      const { contact_number, password } = req.body;
      const isUser: any = await User.findOne({ contact_number });
      if (!isUser) throw new Error(Messages.USER_NOT_FOUND);
      const ispasswordMatch = await bcrypt.compare(password, isUser.password);
      if (!ispasswordMatch) throw new Error(Messages.INVALID_CREDENTIALS);
      const token = await isUser.generateAuthToken();
      res.status(201).json({
        success: true,
        token,
      });
    } catch (error: any) {
      res.status(501).json({
        message: Messages.SOMETHING_BAD,
        errorMessage: error.message,
      });
    }
  }
  public async getProfile(req: Request, res: Response) {
    try {
      const profile = (req as any).user;

      return res.status(201).json({ message: "profile", profile });
    } catch (error: any) {
      res.status(501).json({
        message: Messages.SOMETHING_BAD,
        errorMessage: error.message,
      });
    }
  }
}
