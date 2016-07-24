class Api::V1::EventsController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token
  # before_action :set_event, only: [:show, :edit, :update, :destroy]
  # before_filter :authenticate_user!

  # GET /events
  # GET /events.json
  def index
    respond_with Event.all
  end

  def create
    respond_with :api, :v1, Event.create(event_params) # .merge(user_id: current_user.id)
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    event = event.find(params["id"]) 
    event.update_attributes(event_params) 
    respond_with event, json: event
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    respond_with Event.destroy(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_event
    #   @event = Event.find(params[:id])
    # end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:title, :start_date, :end_date, :agenda, :address, :guests, :host_name)
    end
end
